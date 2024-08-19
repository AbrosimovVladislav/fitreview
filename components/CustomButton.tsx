import {TouchableOpacity, Text, Image} from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string,
    handlePress: () => void,
    containerStyles?: string,
    textStyles?: string,
    isLoading?: boolean,
    icon?: string
}

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading, icon}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`flex flex-row bg-secondary rounded-xl min-h-[62px] justify-center items-center 
            ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}>
            {icon && <Image
                source={icon}
                className="w-6 h-6"
                resizeMethod="contain"
            />}
            <Text className={`text-primary font-bebas text-xl ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
export default CustomButton
