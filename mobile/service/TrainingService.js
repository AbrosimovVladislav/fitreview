import {getRequest, secureGetRequest} from "./beclient";

export const getExercisesByTrainingId = async (trainingId) => {
    return await getRequest(`/training/public/exercises/${trainingId}`)
}

export const getTrainingById = async (trainingId) => {
    return await getRequest(`/training/public/${trainingId}`);
};

export const getTrainingsForUser = async () => {
    return await secureGetRequest(`/training/user`);
};

export const getExerciseById = async (exerciseId) => {
    return await getRequest(`/training/public/exercise/${exerciseId}`);
};

export const getExercisesBySubcategoryId = async (subcategoryId) => {
    const {region, subcategory} = extractRegionAndSubcategoryFromId(subcategoryId);
    return await getRequest(`/training/public/exercises/${region.toUpperCase()}/${subcategory.toUpperCase()}`);
}

const extractRegionAndSubcategoryFromId = (subcategoryId) => {
    const [region, subcategory] = subcategoryId.split('-');
    return {region, subcategory};
}