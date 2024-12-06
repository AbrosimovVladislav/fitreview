INSERT INTO question (type, title, value, description, placeholder)
VALUES ('MULTIANSWER', -- Тип вопроса (перечисление из QuestionType)
        'What is your lifestyle?', -- Заголовок вопроса
        'Lifestyle', -- Значение вопроса
        'Select one or more options', -- Описание вопроса
        NULL -- Плейсхолдер (если не используется, оставляем NULL)
       );

INSERT INTO answer_option (title, image, question_id)
VALUES ('Sedentary job',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d2de4200176f6bc407/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1),
       ('Physically active job',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d2de330021b49a513f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1),
       ('Physically hard job',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d2de390039b81dea1f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1),
       ('High stress level at work',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d2de2c0034829b8fe9/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1),
       ('My work schedule is 5/2',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d2de48000dfc841026/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1),
       ('I have a flexible schedule',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d750420018087793fe/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1),
       ('I prefer relaxed weekends',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d2daf1001c7cca0686/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1),
       ('I prefer active weekends',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d2de2700049e20f92e/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        1);
