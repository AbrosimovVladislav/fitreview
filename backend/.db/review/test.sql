-- Вставляем данные в таблицу UserData
INSERT INTO user_data (id, user_name, estimation, weight, fat_index, age, fr_user_id)
VALUES (1, 'Generated User', 82, 78, 22, 29, 5);

-- Вставляем данные в таблицу Review
INSERT INTO Review (id, date, user_data_id)
VALUES (1, '2024-11-05', 1);


-- Вставляем данные в таблицу BodySegment для FrontView
INSERT INTO body_segment_description (id, descriptions, descriptions_rus)
VALUES (1, '[
  "No visible issues detected in this region"
]', '[
  "Визуально проблем в данном регионе не обнаружено"
]'),
       (2, '[
         "Arrow 2. The left shoulder is lower than the right, indicating possible overuse of the right trapezius. This may be due to improper breathing, a sedentary lifestyle, or weak deltoid muscles lacking shoulder support."
       ]',
        '[
          "Стрелка 2. Левое надплечье ниже правого. Перегрузка правой трапециевидной мышцы может быть связана с дисфункцией дельтовидной, статичной позой или неправильным дыханием."
        ]'),
       (3, '[
         "Arrow 1. The right nipple is lower than the left, possibly due to shortened fascia in the pectoral muscle. This causes nearby muscles to compensate, leading to overuse and muscle imbalance.",
         "Arrow 4. Asymmetry between arrows 4, 5 and a rightward shift of the navel may indicate diaphragm dysfunction, tension in the oblique abdominal muscles, or intestinal issues, affecting core muscle balance and symmetry."
       ]',
        '[
          "Стрелка 1. Правый сосок расположен на своей исходной позиции. Дисфункция наблюдается с правой стороны. ",
          "Стрелка 4. Асимметрия между стрелками 4, 5 и смещение пупка вправо могут указывать на дисфункцию диафрагмы, напряжение косых мышц живота или проблемы с кишечником, что влияет на симметрию и работу мышц корпуса."
        ]'),
       (4, '[
         "Arrow 3. The left nipple is higher than the right, possibly due to shortened fascia in the pectoral muscle. This causes nearby muscles to compensate, leading to overuse and muscle imbalance.",
         "Arrow 5. Asymmetry between arrows 4, 5 and a rightward shift of the navel may indicate diaphragm dysfunction, tension in the oblique abdominal muscles, or intestinal issues, affecting core muscle balance and symmetry.",
         "Arrow 6. The left arm hangs lower than the right, possibly due to weak middle deltoid muscles. A slight forward rotation of the shoulder may suggest tension in the small pectoral and internal shoulder rotator muscles."
       ]',
        '[
          "Стрелка 3. Грудная клетка: левый сосок выше правого. Возможное укорочение фасций грудной мышцы, что снижает её активацию при нагрузке.",
          "Стрелка 5. Асимметрия между стрелками 4, 5 и смещение пупка вправо могут указывать на дисфункцию диафрагмы, напряжение косых мышц живота или проблемы с кишечником, что влияет на симметрию и работу мышц корпуса.",
          "Стрелка 6. Левая рука ниже правой. Средняя дельтовидная мышца, вероятно, не поддерживает плечевую кость в нейтрали."
        ]'),
       (5, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]'),
       (6, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]'),
       (7, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]'),
       (8, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]');

INSERT INTO body_segment (id, name, title, segment_group, estimation, user_image, diagram_image, review_id,
                          body_segment_description_id)
VALUES (1, 'FrontView-L1', 'Upper Body Right', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a247d001271f51de8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a100095f421231/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 1),
       (2, 'FrontView-R1', 'Upper Body Left', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24900035da4a0684/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32b5001af06a46ac/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 2),
       (3, 'FrontView-L2', 'Core Right', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a2482000b43eee1ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a500223e9575e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 3),
       (4, 'FrontView-R2', 'Core Left', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249b00147c131fb8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32bb0030c42413c2/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 4),
       (5, 'FrontView-L3', 'Hips Right', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24870012597061bd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a9002ab2dd698a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 5),
       (6, 'FrontView-R3', 'Hips Left', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249f002d82c97eb0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c20034fc482d06/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 6),
       (7, 'FrontView-L4', 'Feet Right', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a248b0033c3bfe011/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ad002deea7c392/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 7),
       (8, 'FrontView-R4', 'Feet Left', 'FrontView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24a40030acaf12c3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c90032e471c525/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 8);


-- Вставляем данные в таблицу BodySegment для BackView
INSERT INTO body_segment_description (id, descriptions, descriptions_rus)
VALUES (9, '[
  "No visible issues detected in this region"
]', '[
  "Визуально проблем в данном регионе не обнаружено"
]'),
       (10, '[
         "Arrow 2. The right shoulder is higher than the left, possibly due to overuse of the trapezius muscle. This is often linked to carrying a bag on the right shoulder, weak deltoids, or poor posture."
       ]',
        '[
          "Стрелка 2. Правое надплечье выше чем левое.  Наблюдается перегрузка трапециевидной. Это часто может быть связанным с ношением сумок на правой плече, нестабильностью дельтовидной мышцы или нестабильность работы кора."
        ]'),
       (11, '[
         "Arrow 1. Tension in the shoulder muscle suggests scapular instability. This can cause improper function of back and shoulder muscles, affecting overall shoulder mobility.",
         "Arrows 6 & 7. The left lower back muscle is more tense, possibly due to weak glutes and oblique abs. This imbalance creates uneven strain on the lower back and hips."
       ]',
        '[
          "Стрелка 1. Рука и лопатка: гипертонус большой круглой мышцы и слабость широчайшей снижают стабильность лопатки и её подвижность.",
          "Стрелки 6 и 7. Мышцы поясничного региона: левая квадратная мышца напряжена больше, чем правая, из-за дисфункции ягодичных и косых мышц. Это приводит к мышечному дисбалансу передней и задней мышечных цепей."
        ]'),
       (12, '[
         "Arrow 3. The shoulder blade is shifted up and sideways, likely due to tight chest and shoulder muscles or weak back muscles. A forward-tilted pelvis may also contribute to this misalignment.",
         "Arrows 4 & 5. Outward arm rotation may indicate scapular instability: front muscles are overworked, while back muscles are weakened, lacking the support needed for proper shoulder alignment."
       ]',
        '[
          "Стрелка 3. Лопатка смещена вверх и в сторону,  что связано с гипертонусом грудных, плечевых и нестабильной работа мышц кора. Наклон таза вперед также может влиять на это смещение.",
          "Стрелки 4 и 5. ПРука повернута вперёд может указывать на нестабильность лопатки, мышц ротаторов плеча малой грудной, передней зубчатой, ромбовидных мышц."
        ]'),
       (13, '[
         "Arrow 8. Sacral misalignment may be due to uneven hip muscle activity or weak glutes and lower back muscles, disrupting pelvis and lower back symmetry."
       ]',
        '[
          "Стрелка 8. Смещение крестца может быть вызвано асимметрией мышц ротаторов бедра, слабой работы ягодичных мышц и нестабильностью широчайших  мышц."
        ]'),
       (14, '[
         "Arrow 8. Sacral misalignment may be due to uneven hip muscle activity or weak glutes and lower back muscles, disrupting pelvis and lower back symmetry."
       ]',
        '[
          "Стрелка 8. Смещение крестца может быть вызвано асимметрией мышц ротаторов бедра, слабой работы ягодичных мышц и нестабильностью широчайших  мышц."
        ]'),
       (15, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]'),
       (16, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]');

INSERT INTO body_segment (id, name, title, segment_group, estimation, user_image, diagram_image, review_id,
                          body_segment_description_id)
VALUES (9, 'BackView-L1', 'Upper Body Right', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30ba000f2b7117f9/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3278002aac5434e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 9),
       (10, 'BackView-R1', 'Upper Body Left', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30ce00177271991f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b328d00224b1fcb74/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 10),
       (11, 'BackView-L2', 'Core Right', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30bf003befea3059/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b327e000f88416482/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 11),
       (12, 'BackView-R2', 'Core Left', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30d3002710dba480/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32920023424ffacc/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 12),
       (13, 'BackView-L3', 'Hips Right', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30c40029293cfcc4/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3283002fc5a495db/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 13),
       (14, 'BackView-R3', 'Hips Left', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30d8000d18004e95/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32980009458166c5/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 14),
       (15, 'BackView-L4', 'Feet Right', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30c9002d54d8b293/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3288002b90583aec/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 15),
       (16, 'BackView-R4', 'Feet Left', 'BackView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30dc002b42a645d4/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b329c0032e81646a3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 16);


-- Вставляем данные в таблицу BodySegment для SideView
INSERT INTO body_segment_description (id, descriptions, descriptions_rus)
VALUES (17, '[
  "Arrow 1 & 2. Arms are rotated forward due to backward torso shift. This leads to instability in the serratus anterior, pectoralis minor, shoulder rotators, and rhomboid muscles."
]',
        '[
          "Стрелка 1 и 2. Руки выкручены вперед. Это связано с смещением корпуса назад, вызывая нестабильность малой грудной, передней зубчатой, ротаторов плеча и ромбовидной."
        ]'),
       (18, '[
         "Arrow 1. Arms are rotated forward due to backward torso shift. This leads to instability in the serratus anterior, pectoralis minor, shoulder rotators, and rhomboid muscles."
       ]',
        '[
          "Стрелка 1. Руки выкручены вперед. Это связано с смещением корпуса назад, вызывая нестабильность малой грудной, передней зубчатой, ротаторов плеча и ромбовидной."
        ]'),
       (19, '[
         "Arrow 3 & 4. The lower back is overloaded due to pelvic misalignment and weak glutes and core muscles, leading to instability."
       ]',
        '[
          "Стрелка 3 и 4. Перегружена поясница из-за изменения положения таза и слабости ягодичных мышц и кора, что вызывает нестабильность."
        ]'),
       (20, '[
         "Arrow 2 & 3. The lower back is overloaded due to pelvic misalignment and weak glutes and core muscles, leading to instability.",
         "Arrow 4 & 5. The abdominal wall is stretched. Forward pelvic tilt and backward thoracic shift cause lower back strain and weak abdominal and gluteal muscles."
       ]',
        '[
          "Стрелка 2 и 3. Перегружена поясница из-за изменения положения таза и слабости ягодичных мышц и кора, что вызывает нестабильность.",
          "Стрелка 4 и 5. Передняя стенка живота вытянута. Смещение таза вперед и грудного отдела назад вызывает перегруз поясницы и слабость мышц живота и ягодиц."
        ]'),
       (21, '[
         "Arrow 5. The pelvis is tilted forward, causing anterior tilt. This indicates overload on the front thighs, weak core and glutes, and underactivation of the posterior chain."
       ]',
        '[
          "Стрелка 5. Таз выведен вперед с наклоном. Это может указывать на перегруз передней поверхности бедра, слабость мышц кора, ягодиц и недоработку задней мышечной цепи."
        ]'),
       (22, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]'),
       (23, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]'),
       (24, '[
         "No visible issues detected in this region"
       ]', '[
         "Визуально проблем в данном регионе не обнаружено"
       ]');

INSERT INTO body_segment (id, name, title, segment_group, estimation, user_image, diagram_image, review_id,
                          body_segment_description_id)
VALUES (17, 'SideView-L1', 'Left View Upper Body', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd89c0012f7c2ed97/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32cf001e321778a7/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 17),
       (18, 'SideView-R1', 'Right View Upper Body', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8af00120545668b/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32e500360fc46f41/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 18),
       (19, 'SideView-L2', 'Left View Core', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a000334f3b3cd0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32d40034e38953ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 19),
       (20, 'SideView-R2', 'Right View Core', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8b300366d246cc8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ee002972a3475c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 20),
       (21, 'SideView-L3', 'Left View Hips', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a5000dca9c9103/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32d90033eb779a2c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 21),
       (22, 'SideView-R3', 'Right View Hips', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8b8002195eab621/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32f40018e584c449/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 22),
       (23, 'SideView-L4', 'Left View Feet', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a9003665d49572/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32df0016adb205e0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 23),
       (24, 'SideView-R4', 'Right View Feet', 'SideView', NULL,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8bd002bc7252885/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32f90017c6f27fab/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 24);


-- Вставляем данные в таблицу BodySegment для SummaryView
INSERT INTO body_segment_description (id, descriptions, descriptions_rus)
VALUES (25, '[
  "Shoulders. Consult a specialist to address fascial tension and activate muscles. Wear a backpack on both shoulders. Exercises: dynamic stretching, functional training with equipment to improve strength and motor function."
]',
        '[
          "Плечи. Обратитесь к специалисту для работы с фасцией и активации мышц. Носите рюкзак на обоих плечах. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
        ]'),
       (26, '[
         "Shoulders. Consult a specialist to address fascial tension and activate muscles. Wear a backpack on both shoulders. Exercises: dynamic stretching, functional training with equipment to improve strength and motor function."
       ]',
        '[
          "Плечи. Обратитесь к специалисту для работы с фасцией и активации мышц. Носите рюкзак на обоих плечах. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
        ]'),
       (27, '[
         "Thoracic Region. Improve thoracic mobility and core function (diaphragm, abs, pelvic floor). Include stretching for front thighs and exercises targeting hip joints and surrounding muscles."
       ]',
        '[
          "Грудной отдел. Улучшите мобильность грудного отдела и работу кора (диафрагма, пресс, тазовое дно). Добавьте растяжку передней поверхности бедра и тренировки для тазобедренного сустава и окружающих мышц."
        ]'),
       (28, '[
         "Thoracic Region. Improve thoracic mobility and core function (diaphragm, abs, pelvic floor). Include stretching for front thighs and exercises targeting hip joints and surrounding muscles."
       ]',
        '[
          "Грудной отдел. Улучшите мобильность грудного отдела и работу кора (диафрагма, пресс, тазовое дно). Добавьте растяжку передней поверхности бедра и тренировки для тазобедренного сустава и окружающих мышц."
        ]'),
       (29, '[
         "Hip Joint. Focus on hip mobility and pelvic stability. Exercises: dynamic stretching, functional training with equipment to enhance strength and motor function."
       ]',
        '[
          "Тазобедренный сустав. Работайте над мобильностью тазобедренного сустава и стабильностью таза. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
        ]'),
       (30, '[
         "Hip Joint. Focus on hip mobility and pelvic stability. Exercises: dynamic stretching, functional training with equipment to enhance strength and motor function."
       ]',
        '[
          "Тазобедренный сустав. Работайте над мобильностью тазобедренного сустава и стабильностью таза. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
        ]'),
       (31, '[
         "Foot. Wear wide-toe shoes, walk barefoot at home, massage feet and calves. Practice exercises to improve foot stability and mobility."
       ]',
        '[
          "Стопа. Носите обувь с широким носком, ходите босиком дома, делайте массаж стоп и голеней. Тренируйтесь для улучшения стабильности и мобильности стопы."
        ]'),
       (32, '[
         "Foot. Wear wide-toe shoes, walk barefoot at home, massage feet and calves. Practice exercises to improve foot stability and mobility."
       ]',
        '[
          "Стопа. Носите обувь с широким носком, ходите босиком дома, делайте массаж стоп и голеней. Тренируйтесь для улучшения стабильности и мобильности стопы."
        ]');

INSERT INTO body_segment (id, name, title, segment_group, estimation, user_image, diagram_image, review_id,
                          body_segment_description_id)
VALUES (25, 'SummaryView-L1', 'Upper Body Right', 'SummaryView', 91,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a247d001271f51de8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a100095f421231/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 25),
       (26, 'SummaryView-R1', 'Upper Body Left', 'SummaryView', 67,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24900035da4a0684/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32b5001af06a46ac/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 26),
       (27, 'SummaryView-L2', 'Core Right', 'SummaryView', 54,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a2482000b43eee1ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a500223e9575e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 27),
       (28, 'SummaryView-R2', 'Core Left', 'SummaryView', 47,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249b00147c131fb8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32bb0030c42413c2/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 28),
       (29, 'SummaryView-L3', 'Hips Right', 'SummaryView', 94,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24870012597061bd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a9002ab2dd698a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 29),
       (30, 'SummaryView-R3', 'Hips Left', 'SummaryView', 96,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249f002d82c97eb0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c20034fc482d06/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 30),
       (31, 'SummaryView-L4', 'Feet Right', 'SummaryView', 99,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a248b0033c3bfe011/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ad002deea7c392/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 31),
       (32, 'SummaryView-R4', 'Feet Left', 'SummaryView', 99,
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24a40030acaf12c3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c90032e471c525/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
        1, 32);


-- Вставляем данные в таблицу Problem
INSERT INTO problem (id, title, description, estimation, icon_type, review_id)
VALUES (1, 'Right Shoulder',
        'Right shoulder is higher; left arm hangs, suggesting weak deltoid, with trapezius compensating', 67, 'hand',
        1),
       (2, 'Chest Muscles', 'Left pec minor and major seem overloaded, pulling the shoulder forward and up', 47,
        'upper-body', 1),
       (3, 'Lower Back and Pelvis',
        'Left side overloaded; indicates weak glutes and abdominal imbalance affecting pelvic alignment', 54, 'core',
        1);

-- Вставляем данные в таблицу TrainingObjective
INSERT INTO training_objective (id, title, description, icon_type, review_id)
VALUES (1, 'Foot Stability and Big Toe Function',
        'Improve foot stability, enhance big toe mobility, wear flexible, wide-toe shoes', 'hand', 1),
       (2, 'Pelvic Stability and Hip Flexors',
        'Focus on hip flexor release, glute activation, and core-pelvic stabilization', 'feet', 1),
       (3, 'Core and Thoracic Mobility',
        'Strengthen diaphragm and core, enhance thoracic mobility, and release upper shoulder tension', 'feet', 1);

-- Вставляем данные в таблицу GeneralRecommendation
INSERT INTO general_recommendation (id, title, description, icon_type, review_id)
VALUES (1, 'Training and Active Recovery',
        'Swimming, dynamic stretching, bodyweight and equipment-based functional and strength training', 'stress', 1),
       (2, 'Professional Therapeutic Support',
        'Regular sessions with a massage therapist, kinesiologist, and osteopath', 'food', 1),
       (3, 'Relaxation and Recovery', 'Spa treatments for muscle relaxation and overall well-being', 'sleep', 1);