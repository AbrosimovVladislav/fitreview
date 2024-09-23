import {Databases, ID, Query} from "react-native-appwrite";
import {client, config} from "./appwrite";

const databases = new Databases(client);

export const saveAnswer = async (userId, surveyStepId, value) => {
    try {
        const newAnswer = await databases.createDocument(
            config.databaseId,
            config.answerCollectionId,
            ID.unique(),
            {
                value: value,
                date: new Date(),
                user: userId,
                surveyStep: surveyStepId
            }
        )

        return newAnswer;
    } catch (error) {
        console.error('SurveyService-saveAnswer ' + error)
        throw new Error(error);
    }
}

export const getSurveyStepBySlug = async (slug) => {
    try {
        const surveySteps = await databases.listDocuments(
            config.databaseId,
            config.surveyStepCollectionId,
            [Query.equal('slug', slug)]
        )

        return surveySteps.documents[0];
    } catch (error) {
        console.error('[SurveyService-getSurveyStepBySlug] ' + error)
        throw new Error;
    }
}

export const getSurveyStepByStatus = async (status) => {
    try {
        console.log(status)
        const surveySteps = await databases.listDocuments(
            config.databaseId,
            config.surveyStepCollectionId,
            [Query.equal('status', status)]
        )

        return surveySteps.documents[0];
    } catch (error) {
        console.error('[SurveyService-getSurveyStepByStatus] ' + error)
        throw new Error;
    }
}

export const getQuestionsByType = async (slug) => {
    try {
        const questions = await databases.listDocuments(
            config.databaseId,
            config.multiAnswerCollectionId,
            [Query.equal('type', slug)]
        )

        return questions.documents;
    } catch (error) {
        console.error('SurveyService-getQuestionsByType ' + error)
        throw new Error;
    }
}

export const createStatusRecord = async (userId, status) => {
    try {
        const newStatusRecord = await databases.createDocument(
            config.databaseId,
            config.statusCollectionId,
            ID.unique(),
            {
                userId,
                value: status,
                date: new Date()
            }
        )

        return newStatusRecord;
    } catch (error) {
        console.error('SurveyService-createStatusRecord ' + error)
        throw new Error(error);
    }
}

export const getCurrentStatus = async (userId) => {
    try {
        const statuses = await databases.listDocuments(
            config.databaseId,
            config.statusCollectionId,
            [
                Query.equal('userId', userId),
                Query.orderDesc('date'),
                Query.limit(1)
            ]
        )

        return statuses.documents[0] ? statuses.documents[0].value : null;
    } catch (error) {
        console.error('SurveyService-getCurrentStatus ' + error)
        throw new Error(error);
    }
}