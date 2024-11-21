import {getRequest} from "@/service/beclient";

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
                    "Стрелка 2. Левое плечо ниже правого, что может указывать на перенапряжение правой трапециевидной мышцы. Причиной может быть неправильное дыхание, сидячий образ жизни или слабость дельтовидной мышцы, не поддерживающей равновесие плеч."
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
                    "Стрелка 1. Правый сосок ниже левого, что может быть связано с укорочением фасции грудной мышцы. Это приводит к тому, что соседние мышцы берут на себя нагрузку, перегружаясь и вызывая мышечный дисбаланс.",
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
                    "Стрелка 3. Левый сосок выше правого, что может быть связано с укорочением фасции грудной мышцы. Это приводит к тому, что соседние мышцы берут на себя нагрузку, перегружаясь и вызывая мышечный дисбаланс.",
                    "Стрелка 5. Асимметрия между стрелками 4, 5 и смещение пупка вправо могут указывать на дисфункцию диафрагмы, напряжение косых мышц живота или проблемы с кишечником, что влияет на симметрию и работу мышц корпуса.",
                    "Стрелка 6. Левая рука опущена ниже правой, возможно, из-за слабости средней части дельтовидной мышцы. Легкий разворот плеча вперед может указывать на напряжение малой грудной мышцы и внутренних ротаторов плеча."
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
                    "Стрелка 2. Правое плечо выше левого, что может означать перенапряжение трапециевидной мышцы. Это часто связано с ношением сумки на правом плече, слабостью дельтовидной мышцы или неправильной осанкой"
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
                    "Стрелка 1. Перенапряжение мышцы в области плеча указывает на нестабильность лопатки. Это может вызывать неправильную работу спинных и плечевых мышц, что влияет на общую подвижность плеча.",
                    "Стрелки 6 и 7. Левая поясничная мышца более напряжена, что может быть вызвано слабостью ягодичных и косых мышц живота. Это приводит к неравномерной нагрузке на поясницу и бедра."
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
                    "Стрелка 3. Лопатка смещена вверх и в сторону, возможно, из-за напряжения грудной и плечевых мышц или слабости спинных мышц. Сильно наклоненный вперед таз также может влиять на это смещение.",
                    "Стрелки 4 и 5. Повернутая наружу рука может указывать на нестабильность лопатки: мышцы спереди перенапряжены, а мышцы спины, наоборот, ослаблены и не обеспечивают должной поддержки."
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
                    "Стрелка 8. Смещение крестца может возникать из-за неравномерной работы мышц бедер или слабости ягодичных и поясничных мышц, что нарушает симметрию таза и поясницы."
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
                    "Стрелка 8. Смещение крестца может возникать из-за неравномерной работы мышц бедер или слабости ягодичных и поясничных мышц, что нарушает симметрию таза и поясницы."
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
                ],
                "descriptionsRus": [
                    "Визуально проблем в данном регионе не обнаружено"
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
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
                    "Warming up your glutes is essential for enhancing movement efficiency, preventing injuries, and maximizing strength"
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
                    "At the moment, the region does not require any practice"
                ],
                "descriptionsRus": [
                    "На данный момент регион функционально стабилен"
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
                    "1. Focus on exercises to strengthen the left shoulder and balance posture, such as scapular stabilizers, lateral raises, and breathing drills for better muscle engagement and tension release"
                ],
                "descriptionsRus": [
                    "1. Сосредоточьтесь на упражнениях для укрепления левого плеча и выравнивания осанки, таких как стабилизация лопатки, махи в стороны и дыхательные упражнения для снятия напряжения"
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
                    "1. Improve core stability with exercises targeting the diaphragm and obliques, such as planks, side planks, and controlled breathing. Include stretches for the pectoral muscles to release tension"
                ],
                "descriptionsRus": [
                    "1. Необходимо улучшить стабильность корпуса с помощью упражнений на диафрагму и косые мышцы. Добавьте растяжку грудных мышц для снятия напряжения"
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
                    "1. Combine core stabilization drills (planks, dead bugs) with exercises to strengthen deltoids and reduce rotation (resistance band pulls). Include stretches for the chest and shoulder muscles to restore balance",
                    "2. Incorporate internal and external rotation exercises for shoulders using resistance bands. Add posterior chain work (rows, reverse flies) to correct scapular instability and ensure balanced muscle function"
                ],
                "descriptionsRus": [
                    "1. Сочетайте упражнения на стабилизацию корпуса с укреплением дельтовидных мышц. Добавьте растяжку грудных и плечевых мышц для восстановления баланса",
                    "2. Выполняйте упражнения на внутреннюю и внешнюю ротацию плеч с резинкой. Добавьте упражнения на заднюю цепь для исправления нестабильности лопатки"
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
                    "At the moment, the region does not require any practice"
                ],
                "descriptionsRus": [
                    "На данный момент регион функционально стабилен"
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
                    "At the moment, the region does not require any practice"
                ],
                "descriptionsRus": [
                    "На данный момент регион функционально стабилен"
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
                    "At the moment, the region does not require any practice"
                ],
                "descriptionsRus": [
                    "На данный момент регион функционально стабилен"
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
                    "At the moment, the region does not require any practice"
                ],
                "descriptionsRus": [
                    "На данный момент регион функционально стабилен"
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

export const getLastReviewByUserIdDeprecated = async (userId) => {
    return reviewDataNew;
};

export const getLastReviewByUserId = async (userId) => {
    return await getRequest(`/review/${userId}`);
};