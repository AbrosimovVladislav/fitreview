import {SurveyStep} from "@/constants/interface";

export enum SurveyStatus {
    WelcomeScreen = "WelcomeScreen",
    PaymentScreen = "PaymentScreen",
    FirstSurvey = "FirstSurvey",
    WaitingForResults = "WaitingForResults",
    ReviewResults = "ReviewResults",
    SecondSurvey = "SecondSurvey",
}

export enum SurveyStatusOld {
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
    SecondTimeGeneralConditionStep = "SecondTimeGeneralConditionStep",
    SecondTimePhysicalConditionStep = "SecondTimePhysicalConditionStep",
    SecondTimeWeightStep = "SecondTimeWeightStep",
    SecondTimeFrontViewPhotoStep = "SecondTimeFrontViewPhotoStep"
}

export const defaultFirstSurveyStep: SurveyStep = {
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

export const defaultSecondSurveyStep: SurveyStep = {
    stepNumber: 1,
    type: 'multianswer',
    slug: 'general-condition',
    status: SurveyStatus.SecondTimeGeneralConditionStep,
    field: 'generalcondition',
    nextStatus: SurveyStatus.SecondTimePhysicalConditionStep,
    nextSlug: "physical-condition",
    question: 'How you doing ?',
    description: 'Select one or more options'
}