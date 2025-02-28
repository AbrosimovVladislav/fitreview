import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Ionicons} from '@expo/vector-icons';

const UploadArea = ({uploadedImage, setUploadedImage}) => {

    const handleImagePick = async () => {
        // Запрашиваем разрешение на доступ к галерее
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert('Permission to access gallery is required!');
            return;
        }

        // Открываем галерею для выбора изображений
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const selectedImage = result.assets[0].uri; // Получаем URI выбранного изображения
            setUploadedImage(selectedImage);
        }
    };

    // Функция для удаления изображения из списка
    const handleRemoveImage = () => {
        setUploadedImage(null);
    };

    return (
        <View className="flex-1 justify-center items-center px-4">
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                {uploadedImage ? (
                    <View className="relative">
                        <Image
                            source={{ uri: uploadedImage }}
                            className="w-40 h-48 rounded-xl"
                            resizeMode="cover"
                        />
                        <TouchableOpacity
                            onPress={handleRemoveImage}
                            className="absolute top-0 right-0 p-1 bg-red-700 rounded-full"
                        >
                            <Ionicons name="close" size={22} color="white" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    // Если изображение не загружено, отображаем кнопку для загрузки
                    <TouchableOpacity
                        onPress={handleImagePick}
                        className="border-2 border-dashed border-gray-500 rounded-xl p-6 items-center justify-center w-full h-40 bg-black-100"
                    >
                        <Ionicons name="cloud-upload-outline" size={48} color="gray" />
                        <Text className="text-gray-300 mt-4">Tap to upload an image</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>
    );
};

export default UploadArea;
