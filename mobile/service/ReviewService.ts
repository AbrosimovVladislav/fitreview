import {secureGetRequest, securePostRequest} from "@/service/beclient";

export const getReviewStatusByUserId = async () => {
    try {
        let status = await secureGetRequest(`/review/status`);
        return status;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const createNewReview = async () => {

}

export const addNewReviewStatusRecord = async (status) => {
    return await securePostRequest('/review/status', {status: status});
}

export const getLastReviewByUserId = async () => {
    return await secureGetRequest(`/review`);
};