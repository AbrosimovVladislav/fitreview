# FitReview — Реанимация проекта: Node-бэкенд + Supabase + Expo

## Context

**Что есть сейчас:**
- Старый проект FitReview не запускается. Три части в монорепо:
  - [backend/](backend/) — Spring Boot 3.3.4 / Java 21, PostgreSQL на GCP, Firebase Auth, GCS для фото
  - [admin/](admin/) — Next.js 15 + React 19 (админка ревью, жива)
  - [mobile/](mobile/) — Expo 52 / RN 0.76, Firebase Auth, axios → бэк
- Бэк в GCP выключен/платный, GCS-креды и Firebase service account, вероятно, не валидны, зависимости Java устарели.
- В [pom.xml:141](backend/pom.xml#L141) захардкожен Docker Hub PAT — надо ротировать.

**Цель:**
Демо-реди состояние:
1. Выкинуть Java-бэкенд, переписать на **Next.js 15 API routes** (совпадает со стеком `admin/`).
2. Перенести хранение в **Supabase** (Postgres + Storage + Auth).
3. Засидить данные для 1–2 демо-аккаунтов.
4. Поднять мобилку через `expo start` локально, чтобы всё жило на `localhost` + Supabase Cloud.

**Решения (согласовано с пользователем):**
- Auth: **Supabase Auth** (уходим от Firebase — унифицируем стек).
- Backend: **Next.js 15 API routes** в новой папке `backend-node/`.
- DB/Storage: **Supabase Cloud** (бесплатный tier хватит).

**Как обычно делают бэк для RN в 2026:** тот же стек, что и веб — Next.js API routes или standalone Node (Hono/Fastify). RN просто ходит axios/fetch'ом по HTTPS. Supabase добавляет бонус: клиент `@supabase/supabase-js` работает одинаково на вебе и RN, а для простой CRUD-логики можно вообще без своего бэка ходить прямо в Supabase (но мы оставляем прослойку для сложной логики ревью).

---

## Архитектура после миграции

```
fitreview/
├── admin/              # Next.js админка (как была, только baseURL поменяется)
├── backend-node/       # NEW: Next.js 15 API-only проект (/app/api/v1/*)
├── mobile/             # Expo, supabase-js вместо firebase
├── supabase/           # NEW: миграции SQL + seed
│   ├── migrations/
│   └── seed.sql
└── backend/            # OLD: удалить после успешной миграции (пока оставить)
```

**Поток данных:**
```
Mobile (Expo) ──┐
                ├──► Next.js API (backend-node) ──► Supabase (Postgres + Storage + Auth)
Admin (Next.js)─┘                                        ▲
                                                         │
         Mobile uploads photos ───────────────────────────┘ (прямой supabase-js)
```

Mobile аутентифицируется через `supabase-js` → получает JWT → передаёт в Authorization header на backend-node → backend-node верифицирует JWT через Supabase service role key, достаёт user_id, делает запросы в Supabase как service role.

---

## Этапы

### Этап 1. Supabase: создать проект + схема БД

**Шаги:**
1. Зарегистрировать Supabase проект (EU регион) через dashboard. Сохранить:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY` (для mobile)
   - `SUPABASE_SERVICE_ROLE_KEY` (для backend-node, секретно!)
2. Создать папку `supabase/migrations/` и SQL-миграцию `0001_init.sql` со схемой по мотивам JPA-энтити. Таблицы:
   - `fr_user` (id bigserial, auth_user_id uuid FK→auth.users, name, email)
   - `training` (id, title, russian_title, thumbnail, description)
   - `exercise` (id, title, russian_title, thumbnail, short_thumbnail, youtube_video_id, level enum, complexity enum, time, region enum, subcategory enum, instructions jsonb, description)
   - `user_training`, `training_exercise` (join-таблицы M:N)
   - `review` (id, date, estimation, fat_index, fr_user_id FK)
   - `body_segment` (id, name, title, segment_group, estimation, user_image, diagram_image, description, review_id FK)
   - `review_results_item` (id, title, description, estimation, icon_type, type, review_id FK)
   - `review_status` (id, value, date, review_id FK)
   - `question` (id, type enum, title, value, description, placeholder, image_example)
   - `answer_option` (id, title, image, question_id FK)
   - `answer` (id, value, date, review_id FK, question_id FK)
   - `passcode` (id, code, fr_user_id FK, created_at, activated_at, is_active)
3. Создать enums: `region_enum`, `subcategory_enum`, `complexity_enum`, `level_enum`, `question_type_enum`.
4. **RLS: выключить на старте** (проще для демо). Доступ к данным идёт через service_role из backend-node. Включим RLS как задача после демо.
5. Создать Storage bucket `fit-review` (public read) в Supabase dashboard.
6. Применить миграцию через Supabase CLI или SQL Editor в dashboard.

**Файлы для чтения перед миграцией (типы полей):**
- [backend/src/main/java/co/fitreview/backend/entity/](backend/src/main/java/co/fitreview/backend/entity/) — все сущности
- [backend/src/main/java/co/fitreview/backend/entity/review/](backend/src/main/java/co/fitreview/backend/entity/review/)
- [backend/src/main/java/co/fitreview/backend/entity/survey/](backend/src/main/java/co/fitreview/backend/entity/survey/)

---

### Этап 2. backend-node: Next.js 15 API routes

**Создание:**
```bash
npx create-next-app@latest backend-node --typescript --app --no-tailwind --no-src-dir --no-eslint
cd backend-node
npm i @supabase/supabase-js zod
```

**Структура:**
```
backend-node/
├── app/api/v1/
│   ├── auth/
│   │   ├── login/route.ts            # POST — принимает supabase access_token, возвращает FRUser
│   │   └── register/route.ts         # POST — создаёт запись в fr_user
│   ├── review/
│   │   ├── route.ts                  # POST create
│   │   ├── id/route.ts               # GET last review id
│   │   ├── status/route.ts           # POST add status
│   │   └── [reviewId]/
│   │       ├── route.ts              # GET details
│   │       └── ../status/[reviewId]/route.ts # GET last status
│   ├── training/
│   │   ├── user/route.ts             # GET user trainings (secured)
│   │   └── public/
│   │       ├── [id]/route.ts
│   │       ├── exercises/[trainingId]/route.ts
│   │       ├── exercise/[id]/route.ts
│   │       └── exercises/[region]/[subcategory]/route.ts
│   ├── survey/
│   │   ├── answer/route.ts           # POST save, GET by reviewId/questionId
│   │   └── public/question/[id]/route.ts
│   ├── admin/public/                 # порт AdminApi для админки
│   │   ├── reviews/route.ts
│   │   ├── review/[reviewId]/route.ts
│   │   ├── submitReview/route.ts
│   │   ├── body-segment/image/route.ts
│   │   ├── body-segment/description/route.ts
│   │   ├── body-segment/estimation/route.ts
│   │   ├── review/results-item/route.ts
│   │   ├── review/results-item/[id]/route.ts
│   │   ├── review/[reviewId]/estimation/route.ts
│   │   └── review/[reviewId]/fat-index/route.ts
│   ├── passcode/
│   │   ├── verify/route.ts
│   │   └── public/
│   │       ├── generate/route.ts
│   │       └── get-active/route.ts
│   └── storage/public/uploadImage/route.ts
├── lib/
│   ├── supabase.ts                   # service-role клиент
│   ├── auth.ts                       # verifyRequest(req) → user_id или 401
│   └── types.ts                      # DTO типы (AnswerDto, ReviewDetailsDto, ...)
├── .env.local                        # SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
└── package.json                      # "dev": "next dev -p 8080"
```

**Ключевые моменты:**
- `lib/auth.ts` использует `supabase.auth.getUser(accessToken)` для валидации JWT из `Authorization: Bearer <token>`.
- Все рауты отвечают **теми же путями и JSON-шейпами**, что старый Spring-бэк (см. отчёт: список эндпоинтов 1:1 в [AuthApi.java](backend/src/main/java/co/fitreview/backend/web/AuthApi.java), [ReviewApi.java](backend/src/main/java/co/fitreview/backend/web/ReviewApi.java) и т.д.). Это значит **мобилка меняет только baseURL**.
- Порт **8080** — чтобы mobile'у с `EXPO_ENV=local` не менять ничего.
- Поле `firebaseId` переименовать в `auth_user_id` (uuid из Supabase Auth).
- Image upload: сделать на endpoint'e `/storage/public/uploadImage` прокси, который принимает base64 и заливает в Supabase Storage bucket `fit-review` через service client. Возвращает public URL.

**Рекомендация:** не брать ORM (Prisma/Drizzle) на этом этапе — супабейз-клиент + типы через `supabase gen types` хватит. ORM можно добавить потом.

---

### Этап 3. Seed: демо-данные на 1–2 аккаунта

**Шаги:**
1. Создать `supabase/seed.sql` со всеми статичными данными:
   - 4 региона × 6 подкатегорий
   - ~20 упражнений (заимствовать из старой БД если есть дамп, иначе сгенерировать; YouTube ID можно взять реальные из `.req/` файлов)
   - 1 training программа с 5–7 упражнениями
   - Набор survey questions + answer options (взять из [mobile/.req/survey/multiAnswerOptions/](mobile/.req/survey/multiAnswerOptions/) — там уже готовые JSON'ы для lifestyle/sportstyle/healthstyle/nutritionstyle)
2. Создать скрипт `supabase/seed-demo-users.ts`:
   - Через Supabase Admin API создать 2 юзера: `demo@fitreview.co` / `demo123`, `trainer@fitreview.co` / `trainer123`.
   - Создать соответствующие записи в `fr_user`.
   - Для `demo@` создать 1 готовое ревью с заполненными answers, 3 body_segment'ами, review_results_items.
3. Загрузить 3–4 примерных изображения в Supabase Storage bucket `fit-review/seed/` (можно placeholder.com или реальные jpg из `public/`).
4. Применить: `supabase db reset && psql < seed.sql && tsx seed-demo-users.ts`.

**Альтернатива:** seed можно написать одним TypeScript-скриптом, который всё делает через supabase-js (и users, и данные). Так легче дебажить.

---

### Этап 4. Mobile: обновление и переключение на Supabase

**Подготовительные шаги:**
1. Очистить и переустановить зависимости:
   ```bash
   cd mobile
   rm -rf node_modules package-lock.json .expo
   npm install
   npx expo install --check   # выровнять версии SDK 52
   ```
2. Проверить, что Expo SDK 52 не устарел. Если вышел SDK 53+ — мигрировать (`npx expo install expo@latest --fix`). На 2026-04-05 стоит сверить.

**Код-изменения:**

3. **Заменить Firebase на supabase-js:**
   ```bash
   npm i @supabase/supabase-js
   npm uninstall firebase expo-random react-native-appwrite
   npm i expo-crypto
   ```
4. Переписать [mobile/firebase.js](mobile/firebase.js) → `mobile/supabase.ts`:
   ```ts
   import { createClient } from '@supabase/supabase-js';
   import AsyncStorage from '@react-native-async-storage/async-storage';
   import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config';
   export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
     auth: { storage: AsyncStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false }
   });
   ```
5. Обновить [mobile/service/beclient.js](mobile/service/beclient.js): брать токен из `supabase.auth.getSession()` вместо `getIdToken(user)`.
6. Обновить [mobile/app/(auth)/sign-in.tsx](mobile/app/(auth)/sign-in.tsx) и [sign-up.tsx](mobile/app/(auth)/sign-up.tsx):
   - `supabase.auth.signInWithPassword({ email, password })` вместо Firebase
   - `supabase.auth.signUp({ email, password, options: { data: { name }}})` вместо Firebase
   - После успеха — тот же вызов POST `/auth/login` или `/auth/register` на backend-node (он создаст запись в `fr_user`).
7. Обновить [mobile/context/GlobalProvider.js](mobile/context/GlobalProvider.js): `supabase.auth.onAuthStateChange` вместо `onAuthStateChanged`.
8. Обновить [mobile/app.config.js](mobile/app.config.js):
   ```js
   extra: {
     API_URL: process.env.EXPO_ENV === 'local'
       ? 'http://localhost:8080/api/v1'
       : 'https://<your-prod>.vercel.app/api/v1',
     SUPABASE_URL: process.env.SUPABASE_URL,
     SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
   }
   ```
9. Найти все вхождения `import ... from "firebase/auth"` и `@/firebase` → заменить на supabase.
10. Поиск и удаление `expo-random` из кода → заменить на `expo-crypto` (`Crypto.randomUUID()`).

**Запуск:**
```bash
# Терминал 1
cd backend-node && npm run dev   # :8080

# Терминал 2
cd mobile && npm run start:local # Expo Go
```

**Важно:** `localhost:8080` из Expo Go на телефоне недоступен. Варианты:
- Использовать **iOS Simulator / Android Emulator** (там `localhost` работает).
- Либо прописать IP машины в LAN в `API_URL` (`http://192.168.x.x:8080/api/v1`) + запустить Next на `-H 0.0.0.0`.
- Либо развернуть `backend-node` в Vercel preview и ходить туда.

---

### Этап 5. Admin: переключить baseURL и убедиться, что работает

1. Обновить `.env.development` и `.env.production` в [admin/](admin/) на новый API URL (`http://localhost:8080/api/v1` / прод).
2. Пройти основной флоу `admin/app/reviews` — список ревью, деталка, правка body segment'ов.
3. Зафиксить всё, что сломается (скорее всего DTO-поля называются camelCase в JSON — backend-node должен это уважать).

---

### Этап 6. Демо-запуск + README

1. Написать `README.md` в корне:
   - `docker-compose.yml` не нужен — всё в cloud Supabase.
   - Команды: `cd backend-node && npm i && npm run dev`, `cd mobile && npm i && npm run start:local`, `cd admin && npm i && npm run dev`.
   - Демо-креды: `demo@fitreview.co` / `demo123`.
   - Env-переменные: какие `.env.local` куда положить.
2. Скриншоты демо-флоу.
3. Закоммитить, запушить.
4. (опционально) Задеплоить `backend-node` и `admin` в Vercel для публичного демо.

---

## Критические файлы для модификации

| Файл | Действие |
|------|----------|
| [mobile/firebase.js](mobile/firebase.js) | удалить → создать `mobile/supabase.ts` |
| [mobile/service/beclient.js](mobile/service/beclient.js) | поменять получение токена |
| [mobile/context/GlobalProvider.js](mobile/context/GlobalProvider.js) | `onAuthStateChange` от supabase |
| [mobile/app/(auth)/sign-in.tsx](mobile/app/(auth)/sign-in.tsx) | supabase.auth.signInWithPassword |
| [mobile/app/(auth)/sign-up.tsx](mobile/app/(auth)/sign-up.tsx) | supabase.auth.signUp |
| [mobile/app.config.js](mobile/app.config.js) | +SUPABASE_URL, SUPABASE_ANON_KEY |
| [mobile/package.json](mobile/package.json) | убрать firebase, expo-random, appwrite; добавить supabase-js, expo-crypto |
| [admin/.env.development](admin/) | новый API_URL |
| `backend-node/` | создать полностью новый (см. этап 2) |
| `supabase/migrations/0001_init.sql` | создать |
| `supabase/seed.sql` + `seed-demo-users.ts` | создать |

## Что переиспользуем

- **API-контракты**: все пути, методы, JSON-шейпы из [backend/src/main/java/co/fitreview/backend/web/](backend/src/main/java/co/fitreview/backend/web/) — копируются 1:1.
- **Схема БД**: JPA-энтити → SQL таблицы (структура известна).
- **Survey seed-данные**: готовые JSON'ы в [mobile/.req/survey/multiAnswerOptions/](mobile/.req/survey/multiAnswerOptions/).
- **Mobile компоненты**: UI не трогаем — все экраны, ExerciseList, useAppwrite, etc.
- **Admin**: весь UI остаётся, только API URL меняется.

---

## Verification (end-to-end проверка)

После всех этапов прогнать следующий чеклист:

1. **Supabase**: `supabase db diff` пустой, в dashboard'е видно таблицы + 2 юзера в Authentication + seed-записи.
2. **backend-node**: `curl http://localhost:8080/api/v1/training/public/exercises/UPPERBODY/MFR` возвращает JSON-массив упражнений (не пустой).
3. **Auth flow**: `curl -X POST .../api/v1/auth/login -H "Authorization: Bearer <token из supabase>" -d '{"idToken":"..."}'` возвращает FRUser.
4. **Admin**: `cd admin && npm run dev`, открыть `http://localhost:3000/reviews` → увидеть список ревью демо-юзера.
5. **Mobile**:
   - `cd mobile && npm run start:local` стартует Expo
   - В iOS Simulator открывается splash → sign-in
   - Логин `demo@fitreview.co` / `demo123` → редирект на /home
   - Home показывает регионы, тап → subcategory → упражнения загружаются
   - Tab "Review" — видно статус ревью
   - Logout работает
6. **Отсутствие регрессий**: старые скриншоты флоу vs новые — одинаковый UI, одинаковые данные.

---

## Риски / на что обратить внимание

- **Cold start Supabase**: free tier засыпает через неделю простоя — для демо это может быть критично, разбудить заранее.
- **Storage URLs**: после миграции все картинки будут на `<project>.supabase.co/storage/v1/...` — любые хардкоженые ссылки на GCS в seed-данных заменить.
- **Поле `firebaseId`**: переименовать везде в `auth_user_id`. Это касается `FRUser.java` маппинга.
- **Next.js dev server на 8080**: проверить, что порт свободен (старый Java-бэк тоже на 8080).
- **Expo Go + native модулей**: если Expo Go упадёт на каком-то модуле — придётся делать development build через EAS. Но mobile app *JS-only для наших изменений* (мы не добавляем нативных зависимостей), поэтому Expo Go должен справиться.
- **RLS**: стартуем без RLS для простоты демо. Обязательно включить перед любым публичным деплоем.
- **Secrets**: `SUPABASE_SERVICE_ROLE_KEY` **никогда** не попадает в mobile/admin — только в backend-node `.env.local` и в Vercel env vars.
