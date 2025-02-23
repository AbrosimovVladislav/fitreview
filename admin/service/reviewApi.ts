import {IAdminReviewDetailsDto, IAdminReviewResultsItemDto, IAdminShortReviewDto} from "@/interface/interfaces";
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
            status: data.status ?? 'Undefined',
            creationDate: data.creationDate ?? new Date().toISOString(),
            estimation: data.estimation ?? 0,
            fatIndex: data.fatIndex ?? "0",
            answers: data.answers ?? [],
            photos: data.photos ?? [],
            bodySegments: data.bodySegments ?? [],
            reviewResultsItems: data.reviewResultsItems ?? []
        };
    },

    async uploadBodySegmentImage(bodySegmentId: number, reviewId: number, file: File, imageType: "userImage" | "diagramImage"): Promise<void> {
        console.log(reviewId)
        const formData = new FormData();
        formData.append("bodySegmentId", String(bodySegmentId));
        formData.append("reviewId", String(reviewId));
        formData.append("imageType", imageType);
        formData.append("file", file);

        await beClient.post("/api/v1/admin/public/body-segment/image", formData, true);
    },

    async saveBodySegmentDescription(bodySegmentId: number, reviewId: number, description: string): Promise<void> {
        await beClient.post("/api/v1/admin/public/body-segment/description", {
            bodySegmentId,
            reviewId,
            description,
        });
    },

    async saveBodySegmentEstimation(bodySegmentId: number, reviewId: number, estimation: number): Promise<void> {
        await beClient.post("/api/v1/admin/public/body-segment/estimation", {
            bodySegmentId,
            reviewId,
            estimation,
        });
    },

    async saveReviewResultsItem(item: IAdminReviewResultsItemDto): Promise<IAdminReviewResultsItemDto> {
        return await beClient.post("/api/v1/admin/public/review/results-item", item);
    },

    async deleteReviewResultsItem(id: number): Promise<void> {
        await beClient.delete(`/api/v1/admin/public/review/results-item/${id}`);
    },

    async updateReviewEstimation(reviewId: number, estimation: number): Promise<void> {
        await beClient.put(`/api/v1/admin/public/review/${reviewId}/estimation`, {estimation});
    },

    async updateReviewFatIndex(reviewId: number, fatIndex: string): Promise<void> {
        await beClient.put(`/api/v1/admin/public/review/${reviewId}/fat-index`, {fatIndex});
    },

    async submitReview(reviewId: number): Promise<void> {
        if (!reviewId) {
            throw new Error("Review ID is required");
        }

        await beClient.post(`/api/v1/admin/public/submitReview?reviewId=${reviewId}`, null);
    }
};

