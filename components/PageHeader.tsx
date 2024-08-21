import {View, Text} from 'react-native'
import React from 'react'
import {Icon} from "native-base";
import {Ionicons} from "@expo/vector-icons";

interface PageHeaderProps{
    title: string
}

const PageHeader = ({title}: PageHeaderProps) => {
    return (
        <View className='flex flex-row justify-between w-full pb-6'>
            <Icon as={Ionicons} name='chevron-back-outline' size="xl" color='white'/>
            <Text className='text-3xl text-gray-300 font-bebas pr-6'>
                {title}
            </Text>
            <View>
            </View>
        </View>
    )
}
export default PageHeader

