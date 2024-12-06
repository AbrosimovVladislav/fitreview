import {client, config} from "./appwrite";
import * as FileSystem from "expo-file-system";
import {ID, Storage} from "react-native-appwrite";

const storage = new Storage(client);

export const uploadImages = async (fileArray) => {
    return await Promise.all(fileArray.map(fileUri => uploadFile(fileUri, 'image/png', config.frSurveyStorageId)));
};

export const uploadImage = async (imageUrl) => {
    return await uploadFile(imageUrl, 'image/png', config.frSurveyStorageId);
}

const uploadFile = async (fileUri, mimeType, storageId) => {
    try {
        const fileInfo = await FileSystem.getInfoAsync(fileUri);

        if (!fileInfo.exists) {
            throw new Error("File not found");
        }

        const fileToUpload = await storage.createFile(
            storageId,
            ID.unique(),
            {
                uri: fileUri,
                name: fileUri.split('/').pop(),
                type: mimeType,
                size: fileInfo.size
            }
        );

        const publicUrl = storage.getFileView(storageId, fileToUpload.$id);
        return publicUrl;
    } catch (error) {
        console.error("File upload error:", error);
    }
};