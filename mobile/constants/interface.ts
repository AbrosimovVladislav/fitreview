import {SurveyStatus} from "@/constants/survey";

export interface Exercise {
    "id": string,
    "title": string,
    "thumbnail": string,
    "shortThumbnail": string,
    "youtubeVideoId": string,
    "level": string,
    "time": string,
    "region": string,
    "complexity": string,
    "description": string,
    "instructions": string[]
}

export interface Question {
    "id": string,
    "type": string,
    "title": string,
    "value": string,
    "description": string,
    "placeholder": string,
    "imageExample": string
}

export interface SurveyStep {
    "stepNumber": number,
    "type": string,
    "slug": string,
    "status": SurveyStatus,
    "field": string,
    "nextStatus": SurveyStatus,
    "nextSlug": string | null,
    "title"?: string,
    "placeholder"?: string,
    "question": string,
    "description"?: string,
    "samplePhoto1"?: string,
    "samplePhoto2"?: string
}

export interface Training {
    "user": string[],
    "thumbnail": string,
    "title": string,
    "russianTitle": string,
    "description": string
}

// Описание для BodySegment
interface IBodySegment {
    id: number;
    name: string;
    title: string;
    segmentGroup: string;
    estimation: number | null;
    userImage: string;
    diagramImage: string;
    description: string;
}

// Описание для Problems, Objectives, Recommendations
interface IProblem {
    id: number;
    title: string;
    description: string;
    estimation: number;
    iconType: string;
}

interface ITrainingObjective {
    id: number;
    title: string;
    description: string;
    iconType: string;
}

interface IGeneralRecommendation {
    id: number;
    title: string;
    description: string;
    iconType: string;
}

interface IUserData{
    weight: string;
    fatIndex: string;
    age: string;
}

// Описание для главного объекта
export interface IReview {
    id: number;
    date: string;
    estimation: number;
    userData: IUserData;
    bodySegments: IBodySegment[];
    problems: IProblem[];
    trainingObjectives: ITrainingObjective[];
    generalRecommendations: IGeneralRecommendation[];
}
