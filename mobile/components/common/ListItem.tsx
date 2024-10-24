import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {router} from "expo-router";

const ListItem = ({title, image, description, route}) => {

    return (
        <View className='w-full px-1 py-1'>
            <TouchableOpacity onPress={() => router.push(route)}>
                <Image
                    source={{uri: image}}
                    className='w-full aspect-video rounded-xl'
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <View className='w-full pl-0.5 pt-1'>
                <Text className='text-xl text-gray-300 font-mbold'>{title}</Text>
                <Text className='text-sm text-gray-300 font-mmedium pt-1 pb-8'>{description}</Text>
            </View>
        </View>
    )
}
export default ListItem
