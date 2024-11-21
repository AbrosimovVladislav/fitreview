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
    "title": string,
    "image": string,
    "type": string
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
    "description": string,
    "exercise": Exercise[]
}

// Описание для BodySegmentDescription
interface BodySegmentDescription {
    id: number;
    descriptions: string[];
    descriptionsRus: string[];
}

// Описание для BodySegment
interface BodySegment {
    id: number;
    name: string;
    title: string;
    segmentGroup: string;
    estimation: number | null;
    userImage: string;
    diagramImage: string;
    bodySegmentDescription: BodySegmentDescription;
}

// Описание для Problems, Objectives, Recommendations
interface Problem {
    id: number;
    title: string;
    description: string;
    estimation: number;
    iconType: string;
}

interface TrainingObjective {
    id: number;
    title: string;
    description: string;
    iconType: string;
}

interface GeneralRecommendation {
    id: number;
    title: string;
    description: string;
    iconType: string;
}

// Описание для UserData
interface UserData {
    id: number;
    userName: string;
    estimation: number;
    weight: number;
    fatIndex: number;
    age: number;
}

// Описание для главного объекта
interface Review {
    id: number;
    date: string;
    userData: UserData;
    bodySegments: BodySegment[];
    problems: Problem[];
    trainingObjectives: TrainingObjective[];
    generalRecommendations: GeneralRecommendation[];
}
