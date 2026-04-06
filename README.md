# FitReview

Fitness body assessment platform: mobile app (Expo/React Native) + admin panel (Next.js) + API backend (Next.js API routes) + Supabase (Postgres, Auth, Storage).

## Architecture

```
mobile/         — Expo 52 / React Native (user-facing app)
admin/          — Next.js 15 (admin panel for trainers)
backend-node/   — Next.js 15 API routes (REST API on port 8080)
backend/        — OLD: Spring Boot (deprecated, kept for reference)
```

All three apps talk to Supabase Cloud (Postgres + Storage + Auth).

## Prerequisites

- Node.js 18+
- npm
- Expo Go app on phone (or iOS Simulator / Android Emulator)
- Supabase project (already provisioned: `qgtliqdbptmbnhlzeuev`)

## Quick Start

### 1. Backend

```bash
cd backend-node
cp .env.local.example .env.local
# Edit .env.local — paste SUPABASE_SERVICE_ROLE_KEY from Supabase Dashboard
npm install
npm run dev
# Runs on http://localhost:8080
```

### 2. Admin Panel

```bash
cd admin
npm install
npm run dev
# Runs on http://localhost:3000
# Points to backend at http://localhost:8080 by default
```

### 3. Mobile App

```bash
cd mobile
npm install
EXPO_ENV=local npx expo start
# Scan QR with Expo Go, or press 'i' for iOS Simulator
```

**Note:** On a physical device, `localhost` won't work. Either:
- Use iOS Simulator / Android Emulator (localhost works there)
- Or set your LAN IP in `mobile/app.config.js` (e.g. `http://192.168.x.x:8080/api/v1`)

### 4. Create Demo Auth User

In the Supabase Dashboard (Authentication > Users), create a user:
- Email: `demo@fitreview.co`
- Password: `demo123`

Then copy the user's UUID and link it to the existing `fr_user` record:

```sql
UPDATE fr_user SET auth_user_id = '<uuid>' WHERE id = 1;
```

After that, you can log in with `demo@fitreview.co` / `demo123` in the mobile app.

## Environment Variables

### backend-node/.env.local
| Variable | Description |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (secret!) |
| `SUPABASE_STORAGE_BUCKET` | Storage bucket name (default: `fit-review`) |

### mobile (via app.config.js)
| Variable | Description |
|---|---|
| `EXPO_ENV` | `local` for localhost backend |
| `SUPABASE_URL` | Hardcoded in app.config.js |
| `SUPABASE_ANON_KEY` | Hardcoded in app.config.js (public key) |

### admin
| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Backend URL (default: `http://localhost:8080`) |

## Seed Data

The database is pre-seeded with:
- 12 survey questions with answer options
- 81 exercises across 4 body regions (Hips, Core, Feet, Upper Body)
- 3 training programs
- 1 demo user with a complete review (32 body segments, 9 result items)
- Demo passcode: `DEMO2024`

## Tech Stack

- **Mobile:** Expo 52, React Native 0.76, Supabase JS
- **Admin:** Next.js 15, React 19, Tailwind CSS
- **Backend:** Next.js 15 API Routes, Supabase JS (service role)
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage
