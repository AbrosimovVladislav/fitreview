// ---Questions & Answers
import {Question} from "@/constants/interface";
import {getRequest, postRequest} from "@/service/beclient";

export const saveAnswer = async (userId, questionId, answerValue) => {
    const answerString = JSON.stringify(answerValue);

    return await postRequest('/survey/answer', {
        userId: userId,
        questionId: questionId,
        answerValue: answerString
    })
}

export const getAnswerByUserIdAndQuestionId = async (userId, questionId) => {
    const answerObject = await getRequest(`/survey/answer/${userId}/${questionId}`);
    return answerObject.answerValue;
}

export const getQuestionById = async (questionId): Promise<Question> => {
    return await getRequest(`/survey/question/${questionId}`);
}