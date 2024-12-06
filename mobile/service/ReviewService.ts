import {getRequest, postRequest} from "@/service/beclient";

const reviewDataNew = {
    "id": 1,
    "date": "2024-11-05",
    "userData": {
        "id": 1,
        "userName": "Generated User",
        "estimation": 82,
        "weight": 78.0,
        "fatIndex": 22.0,
        "age": 29
    },
    "bodySegments": [
        {
            "id": 1,
            "name": "FrontView-L1",
            "title": "Upper Body Right",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a247d001271f51de8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a100095f421231/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 1,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 2,
            "name": "FrontView-R1",
            "title": "Upper Body Left",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24900035da4a0684/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32b5001af06a46ac/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 2,
                "descriptions": [
                    "Arrow 2. The left shoulder is lower than the right, indicating possible overuse of the right trapezius. This may be due to improper breathing, a sedentary lifestyle, or weak deltoid muscles lacking shoulder support."
                ],
                "descriptionsRus": [
                    "Стрелка 2. Левое надплечье ниже правого. Перегрузка правой трапециевидной мышцы может быть связана с дисфункцией дельтовидной, статичной позой или неправильным дыханием."
                ]
            }
        },
        {
            "id": 3,
            "name": "FrontView-L2",
            "title": "Core Right",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a2482000b43eee1ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a500223e9575e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 3,
                "descriptions": [
                    "Arrow 1. The right nipple is lower than the left, possibly due to shortened fascia in the pectoral muscle. This causes nearby muscles to compensate, leading to overuse and muscle imbalance.",
                    "Arrow 4. Asymmetry between arrows 4, 5 and a rightward shift of the navel may indicate diaphragm dysfunction, tension in the oblique abdominal muscles, or intestinal issues, affecting core muscle balance and symmetry."
                ],
                "descriptionsRus": [
                    "Стрелка 1. Правый сосок расположен на своей исходной позиции. Дисфункция наблюдается с правой стороны. ",
                    "Стрелка 4. Асимметрия между стрелками 4, 5 и смещение пупка вправо могут указывать на дисфункцию диафрагмы, напряжение косых мышц живота или проблемы с кишечником, что влияет на симметрию и работу мышц корпуса."
                ]
            }
        },
        {
            "id": 4,
            "name": "FrontView-R2",
            "title": "Core Left",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249b00147c131fb8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32bb0030c42413c2/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 4,
                "descriptions": [
                    "Arrow 3. The left nipple is higher than the right, possibly due to shortened fascia in the pectoral muscle. This causes nearby muscles to compensate, leading to overuse and muscle imbalance.",
                    "Arrow 5. Asymmetry between arrows 4, 5 and a rightward shift of the navel may indicate diaphragm dysfunction, tension in the oblique abdominal muscles, or intestinal issues, affecting core muscle balance and symmetry.",
                    "Arrow 6. The left arm hangs lower than the right, possibly due to weak middle deltoid muscles. A slight forward rotation of the shoulder may suggest tension in the small pectoral and internal shoulder rotator muscles."
                ],
                "descriptionsRus": [
                    "Стрелка 3. Грудная клетка: левый сосок выше правого. Возможное укорочение фасций грудной мышцы, что снижает её активацию при нагрузке.",
                    "Стрелка 5. Асимметрия между стрелками 4, 5 и смещение пупка вправо могут указывать на дисфункцию диафрагмы, напряжение косых мышц живота или проблемы с кишечником, что влияет на симметрию и работу мышц корпуса.",
                    "Стрелка 6. Левая рука ниже правой. Средняя дельтовидная мышца, вероятно, не поддерживает плечевую кость в нейтрали."
                ]
            }
        },
        {
            "id": 5,
            "name": "FrontView-L3",
            "title": "Hips Right",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24870012597061bd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a9002ab2dd698a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 5,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 6,
            "name": "FrontView-R3",
            "title": "Hips Left",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249f002d82c97eb0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c20034fc482d06/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 6,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 7,
            "name": "FrontView-L4",
            "title": "Feet Right",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a248b0033c3bfe011/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ad002deea7c392/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 7,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 8,
            "name": "FrontView-R4",
            "title": "Feet Left",
            "segmentGroup": "FrontView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24a40030acaf12c3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c90032e471c525/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 8,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 9,
            "name": "BackView-L1",
            "title": "Upper Body Right",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30ba000f2b7117f9/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3278002aac5434e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 9,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 10,
            "name": "BackView-R1",
            "title": "Upper Body Left",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30ce00177271991f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b328d00224b1fcb74/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 10,
                "descriptions": [
                    "Arrow 2. The right shoulder is higher than the left, possibly due to overuse of the trapezius muscle. This is often linked to carrying a bag on the right shoulder, weak deltoids, or poor posture."
                ],
                "descriptionsRus": [
                    "Стрелка 2. Правое надплечье выше чем левое.  Наблюдается перегрузка трапециевидной. Это часто может быть связанным с ношением сумок на правой плече, нестабильностью дельтовидной мышцы или нестабильность работы кора."
                ]
            }
        },
        {
            "id": 11,
            "name": "BackView-L2",
            "title": "Core Right",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30bf003befea3059/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b327e000f88416482/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 11,
                "descriptions": [
                    "Arrow 1. Tension in the shoulder muscle suggests scapular instability. This can cause improper function of back and shoulder muscles, affecting overall shoulder mobility.",
                    "Arrows 6 & 7. The left lower back muscle is more tense, possibly due to weak glutes and oblique abs. This imbalance creates uneven strain on the lower back and hips."
                ],
                "descriptionsRus": [
                    "Стрелка 1. Рука и лопатка: гипертонус большой круглой мышцы и слабость широчайшей снижают стабильность лопатки и её подвижность.",
                    "Стрелки 6 и 7. Мышцы поясничного региона: левая квадратная мышца напряжена больше, чем правая, из-за дисфункции ягодичных и косых мышц. Это приводит к мышечному дисбалансу передней и задней мышечных цепей."
                ]
            }
        },
        {
            "id": 12,
            "name": "BackView-R2",
            "title": "Core Left",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30d3002710dba480/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32920023424ffacc/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 12,
                "descriptions": [
                    "Arrow 3. The shoulder blade is shifted up and sideways, likely due to tight chest and shoulder muscles or weak back muscles. A forward-tilted pelvis may also contribute to this misalignment.",
                    "Arrows 4 & 5. Outward arm rotation may indicate scapular instability: front muscles are overworked, while back muscles are weakened, lacking the support needed for proper shoulder alignment."
                ],
                "descriptionsRus": [
                    "Стрелка 3. Лопатка смещена вверх и в сторону,  что связано с гипертонусом грудных, плечевых и нестабильной работа мышц кора. Наклон таза вперед также может влиять на это смещение.",
                    "Стрелки 4 и 5. ПРука повернута вперёд может указывать на нестабильность лопатки, мышц ротаторов плеча малой грудной, передней зубчатой, ромбовидных мышц."
                ]
            }
        },
        {
            "id": 13,
            "name": "BackView-L3",
            "title": "Hips Right",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30c40029293cfcc4/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3283002fc5a495db/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 13,
                "descriptions": [
                    "Arrow 8. Sacral misalignment may be due to uneven hip muscle activity or weak glutes and lower back muscles, disrupting pelvis and lower back symmetry."
                ],
                "descriptionsRus": [
                    "Стрелка 8. Смещение крестца может быть вызвано асимметрией мышц ротаторов бедра, слабой работы ягодичных мышц и нестабильностью широчайших  мышц."
                ]
            }
        },
        {
            "id": 14,
            "name": "BackView-R3",
            "title": "Hips Left",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30d8000d18004e95/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32980009458166c5/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 14,
                "descriptions": [
                    "Arrow 8. Sacral misalignment may be due to uneven hip muscle activity or weak glutes and lower back muscles, disrupting pelvis and lower back symmetry."
                ],
                "descriptionsRus": [
                    "Стрелка 8. Смещение крестца может быть вызвано асимметрией мышц ротаторов бедра, слабой работы ягодичных мышц и нестабильностью широчайших  мышц."
                ]
            }
        },
        {
            "id": 15,
            "name": "BackView-L4",
            "title": "Feet Right",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30c9002d54d8b293/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b3288002b90583aec/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 15,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 16,
            "name": "BackView-R4",
            "title": "Feet Left",
            "segmentGroup": "BackView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a30dc002b42a645d4/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b329c0032e81646a3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 16,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 17,
            "name": "SideView-L1",
            "title": "Left View Upper Body",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd89c0012f7c2ed97/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32cf001e321778a7/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 17,
                "descriptions": [
                    "Arrow 1 & 2. Arms are rotated forward due to backward torso shift. This leads to instability in the serratus anterior, pectoralis minor, shoulder rotators, and rhomboid muscles."
                ],
                "descriptionsRus": [
                    "Стрелка 1 и 2. Руки выкручены вперед. Это связано с смещением корпуса назад, вызывая нестабильность малой грудной, передней зубчатой, ротаторов плеча и ромбовидной."
                ]
            }
        },
        {
            "id": 18,
            "name": "SideView-R1",
            "title": "Right View Upper Body",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8af00120545668b/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32e500360fc46f41/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 18,
                "descriptions": [
                    "Arrow 1. Arms are rotated forward due to backward torso shift. This leads to instability in the serratus anterior, pectoralis minor, shoulder rotators, and rhomboid muscles."
                ],
                "descriptionsRus": [
                    "Стрелка 1. Руки выкручены вперед. Это связано с смещением корпуса назад, вызывая нестабильность малой грудной, передней зубчатой, ротаторов плеча и ромбовидной."
                ]
            }
        },
        {
            "id": 19,
            "name": "SideView-L2",
            "title": "Left View Core",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a000334f3b3cd0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32d40034e38953ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 19,
                "descriptions": [
                    "Arrow 3 & 4. The lower back is overloaded due to pelvic misalignment and weak glutes and core muscles, leading to instability."
                ],
                "descriptionsRus": [
                    "Стрелка 3 и 4. Перегружена поясница из-за изменения положения таза и слабости ягодичных мышц и кора, что вызывает нестабильность."
                ]
            }
        },
        {
            "id": 20,
            "name": "SideView-R2",
            "title": "Right View Core",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8b300366d246cc8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ee002972a3475c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 20,
                "descriptions": [
                    "Arrow 2 & 3. The lower back is overloaded due to pelvic misalignment and weak glutes and core muscles, leading to instability.",
                    "Arrow 4 & 5. The abdominal wall is stretched. Forward pelvic tilt and backward thoracic shift cause lower back strain and weak abdominal and gluteal muscles."
                ],
                "descriptionsRus": [
                    "Стрелка 2 и 3. Перегружена поясница из-за изменения положения таза и слабости ягодичных мышц и кора, что вызывает нестабильность.",
                    "Стрелка 4 и 5. Передняя стенка живота вытянута. Смещение таза вперед и грудного отдела назад вызывает перегруз поясницы и слабость мышц живота и ягодиц."
                ]
            }
        },
        {
            "id": 21,
            "name": "SideView-L3",
            "title": "Left View Hips",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a5000dca9c9103/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32d90033eb779a2c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 21,
                "descriptions": [
                    "Arrow 5. The pelvis is tilted forward, causing anterior tilt. This indicates overload on the front thighs, weak core and glutes, and underactivation of the posterior chain."
                ],
                "descriptionsRus": [
                    "Стрелка 5. Таз выведен вперед с наклоном. Это может указывать на перегруз передней поверхности бедра, слабость мышц кора, ягодиц и недоработку задней мышечной цепи."
                ]
            }
        },
        {
            "id": 22,
            "name": "SideView-R3",
            "title": "Right View Hips",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8b8002195eab621/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32f40018e584c449/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 22,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 23,
            "name": "SideView-L4",
            "title": "Left View Feet",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8a9003665d49572/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32df0016adb205e0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 23,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 24,
            "name": "SideView-R4",
            "title": "Right View Feet",
            "segmentGroup": "SideView",
            "estimation": null,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672dd8bd002bc7252885/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32f90017c6f27fab/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 24,
                "descriptions": [
                    "No visible issues detected in this region"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
                ]
            }
        },
        {
            "id": 25,
            "name": "SummaryView-L1",
            "title": "Upper Body Right",
            "segmentGroup": "SummaryView",
            "estimation": 91,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a247d001271f51de8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a100095f421231/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 25,
                "descriptions": [
                    "Shoulders. Consult a specialist to address fascial tension and activate muscles. Wear a backpack on both shoulders. Exercises: dynamic stretching, functional training with equipment to improve strength and motor function."
                ],
                "descriptionsRus": [
                    "Плечи. Обратитесь к специалисту для работы с фасцией и активации мышц. Носите рюкзак на обоих плечах. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
                ]
            }
        },
        {
            "id": 26,
            "name": "SummaryView-R1",
            "title": "Upper Body Left",
            "segmentGroup": "SummaryView",
            "estimation": 67,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24900035da4a0684/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32b5001af06a46ac/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 26,
                "descriptions": [
                    "Shoulders. Consult a specialist to address fascial tension and activate muscles. Wear a backpack on both shoulders. Exercises: dynamic stretching, functional training with equipment to improve strength and motor function."
                ],
                "descriptionsRus": [
                    "Плечи. Обратитесь к специалисту для работы с фасцией и активации мышц. Носите рюкзак на обоих плечах. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
                ]
            }
        },
        {
            "id": 27,
            "name": "SummaryView-L2",
            "title": "Core Right",
            "segmentGroup": "SummaryView",
            "estimation": 54,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a2482000b43eee1ba/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a500223e9575e1/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 27,
                "descriptions": [
                    "Thoracic Region. Improve thoracic mobility and core function (diaphragm, abs, pelvic floor). Include stretching for front thighs and exercises targeting hip joints and surrounding muscles."
                ],
                "descriptionsRus": [
                    "Грудной отдел. Улучшите мобильность грудного отдела и работу кора (диафрагма, пресс, тазовое дно). Добавьте растяжку передней поверхности бедра и тренировки для тазобедренного сустава и окружающих мышц."
                ]
            }
        },
        {
            "id": 28,
            "name": "SummaryView-R2",
            "title": "Core Left",
            "segmentGroup": "SummaryView",
            "estimation": 47,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249b00147c131fb8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32bb0030c42413c2/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 28,
                "descriptions": [
                    "Thoracic Region. Improve thoracic mobility and core function (diaphragm, abs, pelvic floor). Include stretching for front thighs and exercises targeting hip joints and surrounding muscles."
                ],
                "descriptionsRus": [
                    "Грудной отдел. Улучшите мобильность грудного отдела и работу кора (диафрагма, пресс, тазовое дно). Добавьте растяжку передней поверхности бедра и тренировки для тазобедренного сустава и окружающих мышц."
                ]
            }
        },
        {
            "id": 29,
            "name": "SummaryView-L3",
            "title": "Hips Right",
            "segmentGroup": "SummaryView",
            "estimation": 94,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24870012597061bd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32a9002ab2dd698a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 29,
                "descriptions": [
                    "Hip Joint. Focus on hip mobility and pelvic stability. Exercises: dynamic stretching, functional training with equipment to enhance strength and motor function."
                ],
                "descriptionsRus": [
                    "Тазобедренный сустав. Работайте над мобильностью тазобедренного сустава и стабильностью таза. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
                ]
            }
        },
        {
            "id": 30,
            "name": "SummaryView-R3",
            "title": "Hips Left",
            "segmentGroup": "SummaryView",
            "estimation": 96,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a249f002d82c97eb0/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c20034fc482d06/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 30,
                "descriptions": [
                    "Hip Joint. Focus on hip mobility and pelvic stability. Exercises: dynamic stretching, functional training with equipment to enhance strength and motor function."
                ],
                "descriptionsRus": [
                    "Тазобедренный сустав. Работайте над мобильностью тазобедренного сустава и стабильностью таза. Упражнения: динамическая растяжка, функциональный тренинг с оборудованием для улучшения силы и двигательной функции."
                ]
            }
        },
        {
            "id": 31,
            "name": "SummaryView-L4",
            "title": "Feet Right",
            "segmentGroup": "SummaryView",
            "estimation": 99,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a248b0033c3bfe011/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32ad002deea7c392/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 31,
                "descriptions": [
                    "Foot. Wear wide-toe shoes, walk barefoot at home, massage feet and calves. Practice exercises to improve foot stability and mobility."
                ],
                "descriptionsRus": [
                    "Стопа. Носите обувь с широким носком, ходите босиком дома, делайте массаж стоп и голеней. Тренируйтесь для улучшения стабильности и мобильности стопы."
                ]
            }
        },
        {
            "id": 32,
            "name": "SummaryView-R4",
            "title": "Feet Left",
            "segmentGroup": "SummaryView",
            "estimation": 99,
            "userImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/672a24a40030acaf12c3/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "diagramImage": "https://cloud.appwrite.io/v1/storage/buckets/672a245c0017b4d2c2bf/files/673b32c90032e471c525/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin",
            "bodySegmentDescription": {
                "id": 32,
                "descriptions": [
                    "Foot. Wear wide-toe shoes, walk barefoot at home, massage feet and calves. Practice exercises to improve foot stability and mobility."
                ],
                "descriptionsRus": [
                    "Стопа. Носите обувь с широким носком, ходите босиком дома, делайте массаж стоп и голеней. Тренируйтесь для улучшения стабильности и мобильности стопы."
                ]
            }
        }
    ],
    "problems": [
        {
            "id": 1,
            "title": "Right Shoulder",
            "description": "Right shoulder is higher; left arm hangs, suggesting weak deltoid, with trapezius compensating",
            "estimation": 67,
            "iconType": "hand"
        },
        {
            "id": 2,
            "title": "Chest Muscles",
            "description": "Left pec minor and major seem overloaded, pulling the shoulder forward and up",
            "estimation": 47,
            "iconType": "upper-body"
        },
        {
            "id": 3,
            "title": "Lower Back and Pelvis",
            "description": "Left side overloaded; indicates weak glutes and abdominal imbalance affecting pelvic alignment",
            "estimation": 54,
            "iconType": "core"
        }
    ],
    "trainingObjectives": [
        {
            "id": 1,
            "title": "Foot Stability and Big Toe Function",
            "description": "Improve foot stability, enhance big toe mobility, wear flexible, wide-toe shoes",
            "iconType": "hand"
        },
        {
            "id": 2,
            "title": "Pelvic Stability and Hip Flexors",
            "description": "Focus on hip flexor release, glute activation, and core-pelvic stabilization",
            "iconType": "feet"
        },
        {
            "id": 3,
            "title": "Core and Thoracic Mobility",
            "description": "Strengthen diaphragm and core, enhance thoracic mobility, and release upper shoulder tension",
            "iconType": "feet"
        }
    ],
    "generalRecommendations": [
        {
            "id": 1,
            "title": "Training and Active Recovery",
            "description": "Swimming, dynamic stretching, bodyweight and equipment-based functional and strength training",
            "iconType": "stress"
        },
        {
            "id": 2,
            "title": "Professional Therapeutic Support",
            "description": "Regular sessions with a massage therapist, kinesiologist, and osteopath",
            "iconType": "food"
        },
        {
            "id": 3,
            "title": "Relaxation and Recovery",
            "description": "Spa treatments for muscle relaxation and overall well-being",
            "iconType": "sleep"
        }
    ]
}

// ---Review Status---
export const getReviewStatusByUserId = async (userId) => {
    try {
        let status = await getRequest(`/review/status/${userId}`);
        return status;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const addNewReviewStatusRecord = async (userId, status) => {
    return await postRequest('/review/status', {userId: userId, status: status});
}


// ---Review Results---
export const getLastReviewByUserIdDeprecated = async (userId) => {
    return reviewDataNew;
};

export const getLastReviewByUserId = async (userId) => {
    return await getRequest(`/review/${userId}`);
};