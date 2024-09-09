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