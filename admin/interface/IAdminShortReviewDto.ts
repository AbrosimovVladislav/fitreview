export interface IAdminShortReviewDto {
    id: string;
    name: string;
    email: string;
    status: string;
    date: string; // Используем string для удобства работы с датами в JSON
}