import {Account, Avatars, Client, Databases, ID, Query, Storage} from 'react-native-appwrite'
import * as FileSystem from 'expo-file-system';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.fitreview.fitreview',
    projectId: '66c32ed800357b5e7314',
    databaseId: '66c3312f002e44e586ce',
    userCollectionId: '66c33172003cb5807db8',
    exerciseCollectionId: '66c76bdf0003e4f2041f',
    questionCollectionId: '66d2d8a400226febc4bd',
    statusCollectionId: '66e83861001ba9e9210d',
    surveyCollectionId: '66e8391700131b5d72db',
    frStorageId: '66c331f000314ec68775',
    frSurveyStorageId: '66e966d9000650fd01e8'
}

const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);
        if (!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser;
    } catch (error) {
        console.error('appwite-js-createUser ' + error)
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.error('appwite-js-signIn ' + error)
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const currentUsers = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        );

        if (!currentUsers) throw Error;

        return currentUsers.documents[0];
    } catch (error) {
        console.log('appwite-js-getCurrentUser ' + error);
        return null;
    }
}

export const signOut = async () => {
    try {
        const session = await account.deleteSession('current');

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getExercisesBySubcategoryId = async (subcategoryId) => {
    try {
        const {region, subcategory} = extractRegionAndSubcategoryFromId(subcategoryId);
        const exercises = await databases.listDocuments(
            config.databaseId,
            config.exerciseCollectionId,
            [Query.and([
                Query.equal('region', region),
                Query.equal('subcategory', subcategory)
            ])]
        )
        return exercises.documents;
    } catch (error) {
        console.error(error)
        throw new Error;
    }
}

export const extractRegionAndSubcategoryFromId = (subcategoryId) => {
    const [region, subcategory] = subcategoryId.split('-');
    return {region, subcategory};
}

export const getExercisesByRegion = async (region) => {
    try {
        const exercises = await databases.listDocuments(
            config.databaseId,
            config.exerciseCollectionId,
            [Query.equal('region', region)]
        )
        return exercises.documents;
    } catch (error) {
        console.error(error)
        throw new Error;
    }
}

export const getExercisesById = async (exerciseId) => {
    try {
        const exercises = await databases.listDocuments(
            config.databaseId,
            config.exerciseCollectionId,
            [Query.equal('exerciseId', exerciseId)]
        )
        return exercises.documents[0];
    } catch (error) {
        console.error(error)
        throw new Error;
    }
}

export const getQuestionsByType = async (type) => {
    try {
        const questions = await databases.listDocuments(
            config.databaseId,
            config.questionCollectionId,
            [Query.equal('type', type)]
        )
        return questions.documents;
    } catch (error) {
        console.error(error)
        throw new Error;
    }
}

export const validatePayment = () => {
    //ToDo implement here
    return true;
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
        console.error('appwite-js-createStatusRecord ' + error)
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
        console.error('appwite-js-getCurrentStatus ' + error)
        throw new Error(error);
    }
}

export const createSurveyRecord = async (userId) => {
    try {
        // Проверяем, существует ли уже запись с таким userId
        const existingSurveyRecords = await databases.listDocuments(
            config.databaseId,
            config.surveyCollectionId,
            [Query.equal('userId', userId)]
        );

        // Если запись существует, возвращаем её
        if (existingSurveyRecords.total > 0) {
            console.log('Record already existing');
            return existingSurveyRecords.documents[0];  // Возвращаем первую найденную запись
        }

        // Если записи не существует, создаем новую
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
        console.error('appwrite-js-createSurveyRecord ' + error);
        throw new Error(error);
    }
};

export const updateSurveyRecordField = async (userId, fieldName, fieldValue) => {
    try {
        // Получаем запись survey для пользователя
        const surveys = await databases.listDocuments(
            config.databaseId,
            config.surveyCollectionId,
            [Query.equal('userId', userId)]
        );

        if (surveys.total === 0) {
            throw new Error('No survey record found for the user');
        }

        const surveyRecord = surveys.documents[0]; // Предполагаем, что у каждого пользователя одна запись

        // Обновляем запись с новым значением для указанного поля
        const updatedSurveyRecord = await databases.updateDocument(
            config.databaseId,
            config.surveyCollectionId,
            surveyRecord.$id, // ID записи, которую обновляем
            {
                [fieldName]: fieldValue // Динамически обновляем поле, переданное в аргументах
            }
        );

        return updatedSurveyRecord;
    } catch (error) {
        console.error('appwrite-js-updateSurveyRecordField ' + error);
        throw new Error(error);
    }
};

export const updateSurveyRecordFieldWithAdditions = async (userId, fieldName, fieldAdditions) => {
    try {
        // Получаем запись survey для пользователя
        const surveys = await databases.listDocuments(
            config.databaseId,
            config.surveyCollectionId,
            [Query.equal('userId', userId)]
        );

        if (surveys.total === 0) {
            throw new Error('No survey record found for the user');
        }

        const surveyRecord = surveys.documents[0]; // Предполагаем, что у каждого пользователя одна запись

        // Получаем текущее значение поля
        const currentFieldValue = surveyRecord[fieldName];

        if (!Array.isArray(currentFieldValue)) {
            throw new Error(`${fieldName} is not an array`);
        }

        // Объединяем старые значения с новыми, избегая дублирования
        const updatedFieldValue = [...new Set([...currentFieldValue, ...fieldAdditions])];

        // Обновляем запись с добавленными значениями
        const updatedSurveyRecord = await databases.updateDocument(
            config.databaseId,
            config.surveyCollectionId,
            surveyRecord.$id, // ID записи, которую обновляем
            {
                [fieldName]: updatedFieldValue // Динамически обновляем поле
            }
        );

        return updatedSurveyRecord;
    } catch (error) {
        console.error('appwrite-js-addDataToSurveyRecordField ' + error);
        throw new Error(error);
    }
};

const uploadFile = async (fileUri) => {
    try {
        // Получаем информацию о файле (размер, URI и MIME-тип)
        const fileInfo = await FileSystem.getInfoAsync(fileUri);

        if (!fileInfo.exists) {
            throw new Error("File not found");
        }

        const mimeType = 'image/png'; // Подставь нужный MIME-тип

        // Формируем объект для загрузки
        const uploadedFile = await storage.createFile(
            config.frSurveyStorageId,
            ID.unique(),
            {
                uri: fileUri,               // URI файла
                name: fileUri.split('/').pop(), // Имя файла
                type: mimeType,                // MIME-тип
                size: fileInfo.size,           // Размер файла
            }
        );

        const publicUrl = storage.getFileView(config.frSurveyStorageId, uploadedFile.$id);

        return publicUrl;
    } catch (error) {
        console.error("File upload error:", error);
    }
};


export const uploadImages = async (fileArray) => {
    return await Promise.all(fileArray.map(fileUri => uploadFile(fileUri, 'image')));
};



