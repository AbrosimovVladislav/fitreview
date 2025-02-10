import {IAdminReviewDetailsDto, IAdminShortReviewDto} from "@/interface/interfaces";
import {beClient} from "@/service/beClient";

export const reviewApi = {
    async getReviews(): Promise<IAdminShortReviewDto[]> {
        const data = await beClient.get("/api/v1/admin/public/reviews");

        if (!Array.isArray(data)) {
            throw new Error("API response is not an array");
        }

        // Проверяем и возвращаем данные в соответствии с интерфейсом
        return data.map((review) => ({
            id: String(review.id ?? "Error Id"),
            name: review.name ?? "Error Name",
            email: review.email ?? "Error Mail",
            status: review.status ?? "Error Status",
            date: review.date ?? new Date().toISOString(), // Подставляем текущую дату, если нет
        }));
    },

    async getReviewById(reviewId: string): Promise<IAdminReviewDetailsDto> {
        if (!reviewId) {
            throw new Error("Review ID is required");
        }

        const data = await beClient.get(`/api/v1/admin/public/review/${reviewId}`);

        if (!data) {
            throw new Error("Review not found");
        }

        // Возвращаем объект, проверяя, что все поля присутствуют
        //TODO проверить можно ли вернуть data, ведь мы делаем одинаковую структуру на BE и FE
        return {
            userName: data.userName ?? "Error Name",
            userEmail: data.userEmail ?? "Error Email",
            creationDate: data.creationDate ?? new Date().toISOString(),
            answers: data.answers ?? [],
            photos: data.photos ?? []
        };
    }
};

