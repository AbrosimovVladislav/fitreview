import {getRequest} from "./beclient";

export const getExerciseById2 = async (exerciseId) => {
    return await getRequest(`/training/exercise/${exerciseId}`);
};