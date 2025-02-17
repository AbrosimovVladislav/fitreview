-- Обновляем данные в таблице Review
UPDATE Review
SET estimation = 85,  -- Пример нового значения для estimation
    fat_index  = '24' -- Пример нового значения для fat_index
WHERE id = 1;

-- FRONT VIEW
UPDATE body_segment
SET name          = 'FrontView-L1',
    title         = 'Upper Body Right',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a247d001271f51de8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a100095f421231/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 1;

UPDATE body_segment
SET name          = 'FrontView-R1',
    title         = 'Upper Body Left',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24900035da4a0684/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32b5001af06a46ac/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 2. The left shoulder is lower than the right, indicating possible overuse of the right trapezius. This may be due to improper breathing, a sedentary lifestyle, or weak deltoid muscles lacking shoulder support.'
WHERE id = 2;

UPDATE body_segment
SET name          = 'FrontView-L2',
    title         = 'Core Right',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a2482000b43eee1ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a500223e9575e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 1. The right nipple is lower than the left, possibly due to shortened fascia in the pectoral muscle. This causes nearby muscles to compensate, leading to overuse and muscle imbalance.  Arrow 4. Asymmetry between arrows 4, 5 and a rightward shift of the navel may indicate diaphragm dysfunction, tension in the oblique abdominal muscles, or intestinal issues, affecting core muscle balance and symmetry.'
WHERE id = 3;

UPDATE body_segment
SET name          = 'FrontView-R2',
    title         = 'Core Left',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249b00147c131fb8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32bb0030c42413c2/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 3. The left nipple is higher than the right, possibly due to shortened fascia in the pectoral muscle. This causes nearby muscles to compensate, leading to overuse and muscle imbalance.  Arrow 5. Asymmetry between arrows 4, 5 and a rightward shift of the navel may indicate diaphragm dysfunction, tension in the oblique abdominal muscles, or intestinal issues, affecting core muscle balance and symmetry.  Arrow 6. The left arm hangs lower than the right, possibly due to weak middle deltoid muscles. A slight forward rotation of the shoulder may suggest tension in the small pectoral and internal shoulder rotator muscles.'
WHERE id = 4;

UPDATE body_segment
SET name          = 'FrontView-L3',
    title         = 'Hips Right',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24870012597061bd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a9002ab2dd698a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 5;

UPDATE body_segment
SET name          = 'FrontView-R3',
    title         = 'Hips Left',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249f002d82c97eb0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c20034fc482d06/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 6;

UPDATE body_segment
SET name          = 'FrontView-L4',
    title         = 'Feet Right',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a248b0033c3bfe011/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ad002deea7c392/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 7;

UPDATE body_segment
SET name          = 'FrontView-R4',
    title         = 'Feet Left',
    segment_group = 'FrontView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24a40030acaf12c3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c90032e471c525/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 8;

-- BACK VIEW
UPDATE body_segment
SET name          = 'BackView-L1',
    title         = 'Upper Body Right',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30ba000f2b7117f9/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3278002aac5434e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 9;

UPDATE body_segment
SET name          = 'BackView-R1',
    title         = 'Upper Body Left',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30ce00177271991f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b328d00224b1fcb74/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 2. The right shoulder is higher than the left, possibly due to overuse of the trapezius muscle. This is often linked to carrying a bag on the right shoulder, weak deltoids, or poor posture.'
WHERE id = 10;

UPDATE body_segment
SET name          = 'BackView-L2',
    title         = 'Core Right',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30bf003befea3059/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b327e000f88416482/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 1. Tension in the shoulder muscle suggests scapular instability. This can cause improper function of back and shoulder muscles, affecting overall shoulder mobility. Arrows 6 & 7. The left lower back muscle is more tense, possibly due to weak glutes and oblique abs. This imbalance creates uneven strain on the lower back and hips.'
WHERE id = 11;

UPDATE body_segment
SET name          = 'BackView-R2',
    title         = 'Core Left',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30d3002710dba480/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32920023424ffacc/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 3. The shoulder blade is shifted up and sideways, likely due to tight chest and shoulder muscles or weak back muscles. A forward-tilted pelvis may also contribute to this misalignment. Arrows 4 & 5. Outward arm rotation may indicate scapular instability: front muscles are overworked, while back muscles are weakened, lacking the support needed for proper shoulder alignment.'
WHERE id = 12;

UPDATE body_segment
SET name          = 'BackView-L3',
    title         = 'Hips Right',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30c40029293cfcc4/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3283002fc5a495db/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 8. Sacral misalignment may be due to uneven hip muscle activity or weak glutes and lower back muscles, disrupting pelvis and lower back symmetry.'
WHERE id = 13;

UPDATE body_segment
SET name          = 'BackView-R3',
    title         = 'Hips Left',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30d8000d18004e95/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32980009458166c5/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 8. Sacral misalignment may be due to uneven hip muscle activity or weak glutes and lower back muscles, disrupting pelvis and lower back symmetry.'
WHERE id = 14;

UPDATE body_segment
SET name          = 'BackView-L4',
    title         = 'Feet Right',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30c9002d54d8b293/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3288002b90583aec/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 15;

UPDATE body_segment
SET name          = 'BackView-R4',
    title         = 'Feet Left',
    segment_group = 'BackView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30dc002b42a645d4/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b329c0032e81646a3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region'
WHERE id = 16;


-- SIDE VIEW
UPDATE body_segment
SET name          = 'SideView-L1',
    title         = 'Left View Upper Body',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd89c0012f7c2ed97/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32cf001e321778a7/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 1 & 2. Arms are rotated forward due to backward torso shift. This leads to instability in the serratus anterior, pectoralis minor, shoulder rotators, and rhomboid muscles.'
WHERE id = 17;

UPDATE body_segment
SET name          = 'SideView-R1',
    title         = 'Right View Upper Body',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8af00120545668b/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32e500360fc46f41/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 1. Arms are rotated forward due to backward torso shift. This leads to instability in the serratus anterior, pectoralis minor, shoulder rotators, and rhomboid muscles.'
WHERE id = 18;

UPDATE body_segment
SET name          = 'SideView-L2',
    title         = 'Left View Core',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a000334f3b3cd0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32d40034e38953ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 3 & 4. The lower back is overloaded due to pelvic misalignment and weak glutes and core muscles, leading to instability.'
WHERE id = 19;

UPDATE body_segment
SET name          = 'SideView-R2',
    title         = 'Right View Core',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8b300366d246cc8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ee002972a3475c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 2 & 3. The lower back is overloaded due to pelvic misalignment and weak glutes and core muscles, leading to instability. Arrow 4 & 5. The abdominal wall is stretched. Forward pelvic tilt and backward thoracic shift cause lower back strain and weak abdominal and gluteal muscles.'
WHERE id = 20;

UPDATE body_segment
SET name          = 'SideView-L3',
    title         = 'Left View Hips',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a5000dca9c9103/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32d90033eb779a2c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Arrow 5. The pelvis is tilted forward, causing anterior tilt. This indicates overload on the front thighs, weak core and glutes, and underactivation of the posterior chain.'
WHERE id = 21;

UPDATE body_segment
SET name          = 'SideView-R3',
    title         = 'Right View Hips',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8b8002195eab621/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32f40018e584c449/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region.'
WHERE id = 22;

UPDATE body_segment
SET name          = 'SideView-L4',
    title         = 'Left View Feet',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a9003665d49572/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32df0016adb205e0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region.'
WHERE id = 23;

UPDATE body_segment
SET name          = 'SideView-R4',
    title         = 'Right View Feet',
    segment_group = 'SideView',
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8bd002bc7252885/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32f90017c6f27fab/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'No visible issues detected in this region.'
WHERE id = 24;


-- SUMMARY VIEW
UPDATE body_segment
SET name          = 'SummaryView-L1',
    title         = 'Upper Body Right',
    segment_group = 'SummaryView',
    estimation    = 91,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a247d001271f51de8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a100095f421231/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Shoulders. Consult a specialist to address fascial tension and activate muscles. Wear a backpack on both shoulders. Exercises: dynamic stretching, functional training with equipment to improve strength and motor function.'
WHERE id = 25;

UPDATE body_segment
SET name          = 'SummaryView-R1',
    title         = 'Upper Body Left',
    segment_group = 'SummaryView',
    estimation    = 67,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24900035da4a0684/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32b5001af06a46ac/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Shoulders. Consult a specialist to address fascial tension and activate muscles. Wear a backpack on both shoulders. Exercises: dynamic stretching, functional training with equipment to improve strength and motor function.'
WHERE id = 26;

UPDATE body_segment
SET name          = 'SummaryView-L2',
    title         = 'Core Right',
    segment_group = 'SummaryView',
    estimation    = 54,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a2482000b43eee1ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a500223e9575e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Thoracic Region. Improve thoracic mobility and core function (diaphragm, abs, pelvic floor). Include stretching for front thighs and exercises targeting hip joints and surrounding muscles.'
WHERE id = 27;

UPDATE body_segment
SET name          = 'SummaryView-R2',
    title         = 'Core Left',
    segment_group = 'SummaryView',
    estimation    = 47,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249b00147c131fb8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32bb0030c42413c2/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Thoracic Region. Improve thoracic mobility and core function (diaphragm, abs, pelvic floor). Include stretching for front thighs and exercises targeting hip joints and surrounding muscles.'
WHERE id = 28;

UPDATE body_segment
SET name          = 'SummaryView-L3',
    title         = 'Hips Right',
    segment_group = 'SummaryView',
    estimation    = 94,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24870012597061bd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a9002ab2dd698a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Hip Joint. Focus on hip mobility and pelvic stability. Exercises: dynamic stretching, functional training with equipment to enhance strength and motor function.'
WHERE id = 29;

UPDATE body_segment
SET name          = 'SummaryView-R3',
    title         = 'Hips Left',
    segment_group = 'SummaryView',
    estimation    = 96,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249f002d82c97eb0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c20034fc482d06/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Hip Joint. Focus on hip mobility and pelvic stability. Exercises: dynamic stretching, functional training with equipment to enhance strength and motor function.'
WHERE id = 30;

UPDATE body_segment
SET name          = 'SummaryView-L4',
    title         = 'Feet Right',
    segment_group = 'SummaryView',
    estimation    = 99,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a248b0033c3bfe011/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ad002deea7c392/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Foot. Wear wide-toe shoes, walk barefoot at home, massage feet and calves. Practice exercises to improve foot stability and mobility.'
WHERE id = 31;

UPDATE body_segment
SET name          = 'SummaryView-R4',
    title         = 'Feet Left',
    segment_group = 'SummaryView',
    estimation    = 99,
    user_image    = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24a40030acaf12c3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    diagram_image = 'https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c90032e471c525/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin',
    description   = 'Foot. Wear wide-toe shoes, walk barefoot at home, massage feet and calves. Practice exercises to improve foot stability and mobility.'
WHERE id = 32;

INSERT INTO review_results_item (id, title, description, estimation, icon_type, type, review_id)
VALUES (1000, 'Right Shoulder',
        'Right shoulder is higher; left arm hangs, suggesting weak deltoid, with trapezius compensating', 67, 'hand',
        'problem',
        1),
       (2000, 'Chest Muscles', 'Left pec minor and major seem overloaded, pulling the shoulder forward and up', 47,
        'upper-body',
        'problem',
        1),
       (3000, 'Lower Back and Pelvis',
        'Left side overloaded; indicates weak glutes and abdominal imbalance affecting pelvic alignment', 54, 'core',
        'problem',
        1),
       (4000, 'Foot Stability and Big Toe Function',
        'Improve foot stability, enhance big toe mobility, wear flexible, wide-toe shoes', 0, 'hand',
        'objective',
        1),
       (5000, 'Pelvic Stability and Hip Flexors',
        'Focus on hip flexor release, glute activation, and core-pelvic stabilization', 0, 'feet',
        'objective',
        1),
       (6000, 'Core and Thoracic Mobility',
        'Strengthen diaphragm and core, enhance thoracic mobility, and release upper shoulder tension', 0, 'feet',
        'objective',
        1),
       (7000, 'Training and Active Recovery',
        'Swimming, dynamic stretching, bodyweight and equipment-based functional and strength training', 0,'stress',
        'recommendation',1),
       (8000, 'Professional Therapeutic Support',
        'Regular sessions with a massage therapist, kinesiologist, and osteopath', 0,'food',
        'recommendation',1),
       (9000, 'Relaxation and Recovery', 'Spa treatments for muscle relaxation and overall well-being', 0,'sleep',
        'recommendation',1);

INSERT INTO review_status (date, value, review_id)
VALUES (NOW(),'ReviewResults', 1)