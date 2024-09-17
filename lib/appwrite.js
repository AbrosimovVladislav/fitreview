import {Client} from 'react-native-appwrite'

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

export const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)





