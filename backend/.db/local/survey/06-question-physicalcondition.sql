-- Insert survey step
INSERT INTO question (type, title, value, description, placeholder)
VALUES (
           'MULTIANSWER',
           'What about your physical condition?',
           'physicalcondition',
           'Select one or more options',
           NULL
       );

-- Insert answer options
INSERT INTO answer_option (title, image, question_id)
VALUES
    ('Pain has decreased',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/671143fb002f4a00a19f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6),
    ('I move more freely',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/671143e50023eb005c44/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6),
    ('My flexibility has improved',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd46480024369ec00a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6),
    ('I feel stronger in workouts',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd46480024369ec00a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6),
    ('I feel more confident during exercises',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd46480024369ec00a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6),
    ('I can breathe properly during exercises',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd46480024369ec00a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6),
    ('I recover faster after training',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd46480024369ec00a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6),
    ('I don’t feel any positive changes',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd46480024369ec00a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        6);
