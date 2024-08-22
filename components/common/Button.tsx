import {Text} from 'react-native'
import {Button as NativeButton, Icon} from "native-base";

import React from 'react'
import {Ionicons} from "@expo/vector-icons";

interface ButtonProps {
    title: string,
    onPress: () => void,
    containerStyles?: string,
    textStyles?: string,
    isLoading?: boolean,
    icon?: React.ReactNode
}

const Button = ({title, onPress, containerStyles, textStyles, isLoading, icon}: ButtonProps) => {
    return (
        <NativeButton
            className={`flex flex-row bg-secondary rounded-xl min-h-[62px] justify-center items-center
            active:bg-secondary-dark ${containerStyles}`}
            onPress={onPress}
            isLoading={isLoading || false}
            startIcon={icon && <Icon as={Ionicons} name={icon} size="md" color='black' className='mb-1 mr-1'/>}
        >
            <Text className={`text-primary font-cbebas text-xl ${textStyles}`}>
                {title}
            </Text>
        </NativeButton>
    )
}
export default Button
