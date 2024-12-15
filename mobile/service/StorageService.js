import * as FileSystem from "expo-file-system";
import {postRequest} from "@/service/beclient";
import {getRandomNumber} from "@/service/utils";

export const generateImageName = (userId, questionId) => {
    return "photo-" + questionId + "-" + userId + "-"  +getRandomNumber();
}

export const uploadImageToAPI = async (fileUri, imageName) => {
    try {
        // Конвертируем файл в Base64
        const base64Image = await convertFileToBase64(fileUri);

        // Отправляем запрос на сервер
        const response = await postRequest('/storage/uploadImage', {
            imageName,
            imageBase64: base64Image,
        });

        return response;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

const convertFileToBase64 = async (fileUri) => {
    try {
        const base64 = await FileSystem.readAsStringAsync(fileUri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        return base64;
    } catch (error) {
        console.error("Error converting file to Base64:", error);
        throw error;
    }
};