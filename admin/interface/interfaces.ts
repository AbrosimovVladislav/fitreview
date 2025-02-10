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
}

export interface IAdminReviewAnswerDto{
    question: string;
    answer: string;
}