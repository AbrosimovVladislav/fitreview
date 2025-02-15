-- Вставка вопроса
INSERT INTO question (type, title, value, description, placeholder)
VALUES ('MULTIANSWER', -- Тип вопроса (перечисление из QuestionType)
        'What is your nutrition?', -- Заголовок вопроса
        'NutritionStyle', -- Значение вопроса
        'Select one or more options', -- Описание вопроса
        NULL -- Плейсхолдер (если не используется, оставляем NULL)
       );

-- Вставка вариантов ответа
INSERT INTO answer_option (title, image, question_id)
VALUES ('Im on a diet now',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2cdc002b37bc0e8e/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        4),
       ('I often fail to stick to a diet',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2cc0001fb21dd68a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        4),
       ('I have digestion issues',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2e50001ccbf9601d/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        4),
       ('I dont eat fast food/sweets/flour',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2d7700133f2fb5f8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        4),
       ('I dont drink alcohol',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2d65002a34d1237d/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        4),
       ('I dont smoke',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66df2ced00317576bb95/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        4);
