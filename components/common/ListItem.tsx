import {View, Text, TouchableOpacity, Image} from 'react-native'
import React, {useEffect} from 'react'
import {router} from "expo-router";

const ListItem = ({title, image, description, route}) => {

    useEffect(() => {
        console.log(image)
    },[image])

    return (
        <View className=''>
            <TouchableOpacity onPress={() => router.push(route)}>
                <Image
                    source={{uri: image}}
                    className='max-w-[350px] h-[200px] rounded-xl'
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <Text className='text-xl text-gray-300 font-mbold'>{title}</Text>
            <Text className='text-sm text-gray-300 font-mmedium pt-1 pb-8'>{description}</Text>
        </View>
    )
}
export default ListItem
