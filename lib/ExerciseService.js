import {Databases, Query} from "react-native-appwrite";
import {client, config} from "./appwrite";

const databases = new Databases(client);

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

const extractRegionAndSubcategoryFromId = (subcategoryId) => {
    const [region, subcategory] = subcategoryId.split('-');
    return {region, subcategory};
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