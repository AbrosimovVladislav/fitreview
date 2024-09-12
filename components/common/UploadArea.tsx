import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const UploadArea = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        console.log(selectedImage)
    },[selectedImage])

    const handleImagePick = async () => {
        // Запрашиваем разрешение на доступ к галерее
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access gallery is required!');
            return;
        }

        // Открываем галерею для выбора изображения
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    return (
        <View className="p-4 items-center">
            <TouchableOpacity
                onPress={handleImagePick}
                className="border-2 border-dashed border-gray-500 rounded-xl p-6 items-center justify-center w-full h-40 bg-black-100"
            >
                <Ionicons name="cloud-upload-outline" size={48} color="gray" />
                <Text className="text-gray-300 mt-4">Tap to upload an image</Text>
            </TouchableOpacity>

            {selectedImage && (
                <View className="mt-4">
                    <Image
                        source={{ uri: selectedImage }}
                        className="w-40 h-40 rounded-xl"
                        resizeMode="cover"
                    />
                </View>
            )}
        </View>
    );
};

export default UploadArea;
