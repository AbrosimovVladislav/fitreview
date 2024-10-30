import {getRequest} from "./beclient";

export const getTrainingById = async (trainingId) => {
    return await getRequest(`/training/${trainingId}`);
};

export const getExerciseById = async (exerciseId) => {
    return await getRequest(`/training/exercise/${exerciseId}`);
};

export const getExercisesBySubcategoryId = async (subcategoryId) => {
    const {region, subcategory} = extractRegionAndSubcategoryFromId(subcategoryId);
    return await getRequest(`/training/exercises/${region.toUpperCase()}/${subcategory.toUpperCase()}`);
}

const extractRegionAndSubcategoryFromId = (subcategoryId) => {
    const [region, subcategory] = subcategoryId.split('-');
    return {region, subcategory};
}