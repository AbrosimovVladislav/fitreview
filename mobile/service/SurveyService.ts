// ---Questions & Answers
import {Question} from "@/constants/interface";
import {getRequest, secureGetRequest, securePostRequest} from "@/service/beclient";

export const saveAnswer = async (questionId, answerValue, reviewId) => {
    const answerString = JSON.stringify(answerValue);

    return await securePostRequest('/survey/answer', {
        reviewId: reviewId,
        questionId: questionId,
        answerValue: answerString
    })
}

export const getAnswerByReviewIdAndQuestionId = async (reviewId, questionId) => {
    const answerObject = await secureGetRequest(`/survey/answer/${reviewId}/${questionId}`);
    return answerObject.answerValue;
}

export const getQuestionById = async (questionId): Promise<Question> => {
    return await getRequest(`/survey/public/question/${questionId}`);
}