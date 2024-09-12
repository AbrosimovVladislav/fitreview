import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const UploadArea = ({uploadedImages, setUploadedImages}) => {

    const handleImagePick = async () => {
        // Запрашиваем разрешение на доступ к галерее
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
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
            const newImages = result.assets.map(asset => asset.uri);
            setUploadedImages([...uploadedImages, ...newImages]); // Добавляем новые изображения к уже выбранным
        }
    };

    // Функция для удаления изображения из списка
    const handleRemoveImage = (indexToRemove) => {
        setUploadedImages(uploadedImages.filter((_, index) => index !== indexToRemove));
    };

    return (
        <View className="flex-1 justify-between px-4">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Отображаем выбранные изображения */}
                <View className="mb-6 justify-center items-center">
                    <ScrollView horizontal>
                        <View className="flex-row gap-6">
                            {uploadedImages.map((imageUri, index) => (
                                <View key={index} className="relative">
                                    <Image
                                        source={{ uri: imageUri }}
                                        className="w-40 h-52 rounded-xl"
                                        resizeMode="cover"
                                    />
                                    <TouchableOpacity
                                        onPress={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 p-1 bg-red-700 rounded-full"
                                    >
                                        <Ionicons name="close" size={22} color="white" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    {/* Условие для отображения области загрузки */}
                    {uploadedImages.length < 2 && (
                        <TouchableOpacity
                            onPress={handleImagePick}
                            className="border-2 border-dashed border-gray-500 rounded-xl p-6 items-center justify-center w-full h-40 bg-black-100 mt-4"
                        >
                            <Ionicons name="cloud-upload-outline" size={48} color="gray" />
                            <Text className="text-gray-300 mt-4">Tap to upload images</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>


        </View>
    );
};

export default UploadArea;
