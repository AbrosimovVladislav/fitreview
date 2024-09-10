import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
    title: string;
    onPress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
    icon?: string;
    disabled?: boolean;
}

const Button = ({ title, onPress, containerStyles, textStyles, isLoading, icon, disabled }: ButtonProps) => {
    return (
        <TouchableOpacity
            disabled={disabled || isLoading}
            onPress={onPress}
            className={`flex flex-row justify-center items-center min-h-[62px] rounded-xl px-4 ${disabled ? 'bg-gray-400' : 'bg-secondary'} ${containerStyles}`}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color="white" />
            ) : (
                <View className="flex flex-row items-center">
                    {icon && (
                        <Ionicons name={icon} size={24} color="black" className="mr-2" />
                    )}
                    <Text className={`text-primary text-xl font-cbebas ${textStyles}`}>
                        {title}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Button;
