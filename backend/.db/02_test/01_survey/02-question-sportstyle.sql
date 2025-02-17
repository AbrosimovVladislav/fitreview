-- Вставка вопроса
INSERT INTO question (type, title, value, description, placeholder)
VALUES ('MULTIANSWER', -- Тип вопроса
        'What is your sport style?', -- Заголовок вопроса
        'SportStyle', -- Значение вопроса
        'Select one or more options', -- Описание вопроса
        NULL -- Плейсхолдер
       );

-- Вставка вариантов ответов
INSERT INTO answer_option (title, image, question_id)
VALUES ('No physical activity',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d753c3001ed356f7e6/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2),
       ('Had gym training experience',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d755bb001959fc2dd0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2),
       ('Physically active once a week',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d754f00002955b478c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2),
       ('Regular training',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d75467002b48b68465/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2),
       ('I don''t like heavy physical exercise',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d75744000ec272a994/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2),
       ('Have professional sports experience',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d757a80005021253db/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2),
       ('Had/Have serious injuries',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d758b2001524b44ac8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2),
       ('Had complex rehabilitation after injury',
        'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66d758ee0035a3c555c9/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        2);
