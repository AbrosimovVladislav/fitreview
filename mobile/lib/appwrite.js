import {Client} from 'react-native-appwrite'

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.fitreview.fitreview',
    projectId: '66c32ed800357b5e7314',
    databaseId: '66c3312f002e44e586ce',
    userCollectionId: '66c33172003cb5807db8',
    exerciseCollectionId: '66c76bdf0003e4f2041f',
    multiAnswerCollectionId: '66d2d8a400226febc4bd',
    surveyStepCollectionId: '66f16c200000183b116c',
    statusCollectionId: '66e83861001ba9e9210d',
    answerCollectionId: '66f168f90014ee377c8f',
    trainingCollectionId: '66f1c3cb0036cbb71361',
    frStorageId: '66c331f000314ec68775',
    frSurveyStorageId: '66e9aa840010695d18f0'
}

export const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)





