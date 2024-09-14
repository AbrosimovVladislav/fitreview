import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface PageHeaderProps {
    title?: string;
    icon?: string;
    onIconPress?: () => void;
}

const PageHeader = ({ title, icon, onIconPress }: PageHeaderProps) => {
    return (
        <View className={`flex flex-row w-full pb-4 items-center ${icon ? 'justify-between' : 'justify-start'}`}>
            <TouchableOpacity onPress={() => router.back()} className="pl-2">
                <Ionicons name="chevron-back-outline" size={28} color="white" />
            </TouchableOpacity>

            <Text className={`text-3xl text-gray-300 font-cbebas ${icon ? '' : 'flex-1 text-center pr-5'}`}>
                {title || ''}
            </Text>

            {icon && (
                <TouchableOpacity onPress={onIconPress} className="pr-2">
                    <Ionicons name={icon} size={28} color="white" />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default PageHeader;
