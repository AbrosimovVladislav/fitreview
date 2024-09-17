import {SurveyStatus} from "@/constants/survey-status";

export const multiAnswerQuestionPageDefinitions = [
    {
        stepNumber: 1,
        slug: 'lifestyle',
        status: SurveyStatus.LifeStyleStep,
        field: 'lifestyle',
        nextStatus: SurveyStatus.SportStyleStep,
        nextSlug: "sportstyle",
        question: 'What is your lifestyle ?',
        description: 'Select one or more options'
    },
    {
        stepNumber: 2,
        slug: 'sportstyle',
        status: SurveyStatus.SportStyleStep,
        field: 'sportstyle',
        nextStatus: SurveyStatus.HealthStyleStep,
        nextSlug: "healthstyle",
        question: 'What is your sport style ?',
        description: 'Select one or more options'
    },
    {
        stepNumber: 3,
        slug: 'healthstyle',
        status: SurveyStatus.HealthStyleStep,
        field: 'healthstyle',
        nextStatus: SurveyStatus.NutritionStyleStep,
        nextSlug: "nutritionstyle",
        question: 'What is your health ?',
        description: 'Select one or more options'
    },
    {
        stepNumber: 4,
        slug: 'nutritionstyle',
        status: SurveyStatus.NutritionStyleStep,
        field: 'nutritionstyle',
        nextStatus: SurveyStatus.AgeStep,
        nextSlug: null,
        question: 'What is your nutrition ?',
        description: 'Select one or more options'
    }
]

export const photoQuestionPageDefinitions = [
    {
        id: 1,
        slug: "front-view",
        status: SurveyStatus.FrontViewPhotoStep,
        title: "Front View Photos",
        nextStatus: SurveyStatus.SideViewPhotoStep,
        nextSlug: "side-view",
        samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
    },
    {
        id: 2,
        slug: "side-view",
        status: SurveyStatus.SideViewPhotoStep,
        title: "Side View Photos",
        nextStatus: SurveyStatus.FrontViewWithRaisedLegPhotoStep,
        nextSlug: "front-view-raised-leg",
        samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
    },
    {
        id: 3,
        slug: "front-view-raised-leg",
        status: SurveyStatus.FrontViewWithRaisedLegPhotoStep,
        title: "Front View Photos With Raised Leg",
        nextStatus: SurveyStatus.SideViewWithRaisedLegPhotoStep,
        nextSlug: "side-view-raised-leg",
        samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
    },
    {
        id: 4,
        slug: "side-view-raised-leg",
        status: SurveyStatus.SideViewWithRaisedLegPhotoStep,
        title: "Side View Photos With Raised Leg",
        nextStatus: SurveyStatus.WaitingForResults,
        nextSlug: null,
        samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
    }
]