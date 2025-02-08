import {secureGetRequest, securePostRequest} from "@/service/beclient";

export const createNewReview = async () => {
    return await securePostRequest('/review');
}

export const addNewReviewStatus = async (reviewId, status) => {
    return await securePostRequest('/review/status', {reviewId: reviewId, status: status});
}

export const getLastReviewByUserId = async () => {
    return await secureGetRequest(`/review`);
};

export const getLastReviewIdByUserId = async () => {
    return await secureGetRequest(`/review/id`);
};

export const getReviewStatusById = async (reviewId) => {
    try {
        return await secureGetRequest(`/review/status/${reviewId}`);
    } catch (error) {
        console.log(error)
        return null;
    }
}





