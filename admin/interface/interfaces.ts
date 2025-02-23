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
    status: string;
    creationDate: string;
    estimation: number;
    fatIndex: string;
    answers: IAdminReviewAnswerDto[];
    photos: IAdminReviewAnswerDto[];
    bodySegments: IAdminBodySegmentDto[];
    reviewResultsItems: IAdminReviewResultsItemDto[];
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

export interface IAdminReviewResultsItemDto {
    id?: number;
    reviewId: number;       // ID ревью, к которому относится этот результат
    title: string;          // Название секции (например, "Right Shoulder", "Core and Thoracic Mobility")
    description: string;    // Описание проблемы или рекомендации
    estimation: number;     // Оценка в процентах (например, 67%)
    iconType: string;       // Тип иконки (например, "hand", "shirt", "target")
    type: "problem" | "objective" | "recommendation" | string;  // Тип результата
}