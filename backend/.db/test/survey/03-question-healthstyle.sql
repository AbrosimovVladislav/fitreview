-- Вставка вопроса
INSERT INTO question (type, title, value, description, placeholder)
VALUES ('MULTIANSWER', -- Тип вопроса (перечисление из QuestionType)
        'What is your health?', -- Заголовок вопроса
        'HealthStyle', -- Значение вопроса
        'Select one or more options', -- Описание вопроса
        NULL -- Плейсхолдер (если не используется, оставляем NULL)
       );

-- Вставка вариантов ответа
INSERT INTO answer_option (title, image, question_id)
VALUES ('Often get sick',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df289a002d1920ff61/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3),
       ('Had serious surgeries',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df28ed00078dadc7ee/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3),
       ('Have sleep problems',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df28d3003bb2bd4ee8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3),
       ('Hard to wake up in the morning',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df294a002a002bf7ab/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3),
       ('Low energy during the day',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2bab00124d785d55/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3),
       ('Often feel discomfort in the body',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2a770009d66fbea9/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3),
       ('Uncomfortable in my shoes',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2aee0021d0636254/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3),
       ('I wear orthopedic insoles',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2b01002d507963ee/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        3);
