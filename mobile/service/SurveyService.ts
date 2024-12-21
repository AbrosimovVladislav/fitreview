// ---Questions & Answers
import {Question} from "@/constants/interface";
import {getRequest, secureGetRequest, securePostRequest} from "@/service/beclient";

export const saveAnswer = async (questionId, answerValue) => {
    const answerString = JSON.stringify(answerValue);

    return await securePostRequest('/survey/answer', {
        questionId: questionId,
        answerValue: answerString
    })
}

export const getAnswerByQuestionIdForUser = async (questionId) => {
    const answerObject = await secureGetRequest(`/survey/answer/${questionId}`);
    return answerObject.answerValue;
}

export const getQuestionById = async (questionId): Promise<Question> => {
    return await getRequest(`/survey/public/question/${questionId}`);
}