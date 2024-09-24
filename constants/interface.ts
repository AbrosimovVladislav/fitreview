import {SurveyStatus} from "@/constants/survey";

export interface Exercise {
    "exerciseId": string,
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
    "exercise": string[]
}