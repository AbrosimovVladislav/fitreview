import {Databases, ID, Query} from "react-native-appwrite";
import {client, config} from "./appwrite";

const databases = new Databases(client);

export const getQuestionsByType = async (type) => {
    try {
        const questions = await databases.listDocuments(
            config.databaseId,
            config.questionCollectionId,
            [Query.equal('type', type)]
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

export const createSurveyRecord = async (userId) => {
    try {
        const existingSurveyRecords = await databases.listDocuments(
            config.databaseId,
            config.surveyCollectionId,
            [Query.equal('userId', userId)]
        );

        if (existingSurveyRecords.total > 0) {
            console.log('Record already existing');
            return existingSurveyRecords.documents[0];
        }

        const newSurveyRecord = await databases.createDocument(
            config.databaseId,
            config.surveyCollectionId,
            ID.unique(),
            {
                userId
            }
        );

        return newSurveyRecord;
    } catch (error) {
        console.error('SurveyService-createSurveyRecord ' + error)
        throw new Error(error);
    }
};

export const updateSurveyRecordField = async (userId, fieldName, fieldValue) => {
    try {
        const surveyRecords = await databases.listDocuments(
            config.databaseId,
            config.surveyCollectionId,
            [Query.equal('userId', userId)]
        );

        if (surveyRecords.total === 0) {
            throw new Error('No survey record found for the user');
        }

        const surveyRecord = surveyRecords.documents[0];
        const updatedSurveyRecord = await databases.updateDocument(
            config.databaseId,
            config.surveyCollectionId,
            surveyRecord.$id,
            {
                [fieldName]: fieldValue
            }
        );

        return updatedSurveyRecord;
    } catch (error) {
        console.error('SurveyService-updateSurveyRecordField ' + error)
        throw new Error(error);
    }
};

export const updateSurveyRecordArrayFieldWithAdditionalValues = async (userId, fieldName, fieldAdditions) => {
    try {
        const surveyRecords = await databases.listDocuments(
            config.databaseId,
            config.surveyCollectionId,
            [Query.equal('userId', userId)]
        );

        if (surveyRecords.total === 0) {
            throw new Error('No survey record found for the user');
        }

        const surveyRecord = surveyRecords.documents[0];
        const currentFieldValue = surveyRecord[fieldName];

        if (!Array.isArray(currentFieldValue)) {
            throw new Error(`${fieldName} is not an array`);
        }

        // Combine old values with new values without duplicates
        const updatedFieldValue = [...new Set([...currentFieldValue, ...fieldAdditions])];
        const updatedSurveyRecord = await databases.updateDocument(
            config.databaseId,
            config.surveyCollectionId,
            surveyRecord.$id,
            {
                [fieldName]: updatedFieldValue
            }
        );

        return updatedSurveyRecord;
    } catch (error) {
        console.error('SurveyService-updateSurveyRecordFieldWithAdditions ' + error)
        throw new Error(error);
    }
};