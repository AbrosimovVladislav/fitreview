-- Insert survey step
INSERT INTO question (type, title, value, description, placeholder)
VALUES (
           'MULTIANSWER',
           'How you doing?',
           'generalcondition',
           'Select one or more options',
           NULL
       );

-- Insert answer options
INSERT INTO answer_option (title, image, question_id)
VALUES
    ('My sleep has improved',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd464300129307e067/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5),
    ('I feel physically better',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd463800265409c206/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5),
    ('I feel less stressed',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd4632003a20b5f18d/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5),
    ('I’m more energized daily',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66fd463e001288a273fd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5),
    ('I look more toned',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/671143f50031724d020c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5),
    ('I wake up feeling rested',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/671143f0001433345d41/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5),
    ('I notice improved focus',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/671143eb001653908c3a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5),
    ('I don’t feel any positive changes',
     'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/671143e0001233dcae83/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
        5);
