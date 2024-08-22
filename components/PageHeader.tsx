import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Icon} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";

interface PageHeaderProps {
    title?: string
}

const PageHeader = ({title}: PageHeaderProps) => {
    return (
        <View className='flex flex-row justify-between w-full pb-6'>
            <TouchableOpacity onPress={() => router.back()} className='pl-2'>
                <Icon as={Ionicons} name='chevron-back-outline' size="xl" color='white'/>
            </TouchableOpacity>
            <Text className='text-3xl text-gray-300 font-cbebas pr-6'>
                {title || ''}
            </Text>
            <View>
            </View>
        </View>
    )
}
export default PageHeader

