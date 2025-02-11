export interface IAdminShortReviewDto {
    id: string;
    name: string;
    email: string;
    status: string;
    date: string; // Используем string для удобства работы с датами в JSON
}

export interface IAdminReviewDetailsDto {
    userName: string;
    userEmail: string;
    creationDate: string;
    answers: IAdminReviewAnswerDto[];
    photos: string[];
    bodySegments: IAdminBodySegmentDto[];
}

export interface IAdminReviewAnswerDto {
    question: string;
    answer: string;
}

export interface IAdminBodySegmentDto {
    id: number;
    name: string;
    title: string;
    segmentGroup: string;
    userImage: string;
    diagramImage: string;
    description: string;
    estimation: number;
}