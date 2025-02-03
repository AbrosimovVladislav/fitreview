import {IAdminShortReviewDto} from "@/interface/IAdminShortReviewDto";
import {beClient} from "@/service/beClient";

export const reviewApi = {
    async getReviews(): Promise<IAdminShortReviewDto[]> {
        const data = await beClient.get("/api/v1/admin/public/review");

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
};
