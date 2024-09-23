import {SurveyStep} from "@/constants/interface";

export enum SurveyStatus {
    LifeStyleStep = "LifeStyleStep",
    SportStyleStep = "SportStyleStep",
    HealthStyleStep = "HealthStyleStep",
    NutritionStyleStep = "NutritionStyleStep",
    AgeStep = "AgeStep",
    WeightStep = "WeightStep",
    FrontViewPhotoStep = "FrontViewPhotoStep",
    SideViewPhotoStep = "SideViewPhotoStep",
    FrontViewWithRaisedLegPhotoStep = "FrontViewWithRaisedLegPhotoStep",
    SideViewWithRaisedLegPhotoStep = "SideViewWithRaisedLegPhotoStep",
    WaitingForResults = "WaitingForResults",
    FirstReviewDone = "FirstReviewDone",
    SecondTimeWeightStep = "SecondTimeWeightStep",
    SecondTimeFrontViewPhotoStep = "SecondTimeFrontViewPhotoStep",
}

export const defaultSurveyStep: SurveyStep = {
    stepNumber: 1,
    type: 'multianswer',
    slug: 'lifestyle',
    status: SurveyStatus.LifeStyleStep,
    field: 'lifestyle',
    nextStatus: SurveyStatus.SportStyleStep,
    nextSlug: "sportstyle",
    question: 'What is your lifestyle ?',
    description: 'Select one or more options'
}