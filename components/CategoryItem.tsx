import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {router} from "expo-router";

interface CategoryItemProps {
    title: string,
    imageUrl: string,
    description: string,
    categoryUrl: string
}

const CategoryItem = ({title, imageUrl, description, categoryUrl}: CategoryItemProps) => {

    return (
        <View>
            <TouchableOpacity onPress={() => router.push(categoryUrl)}>
                <Image
                    source={imageUrl}
                    className='max-w-[350px] h-[200px] rounded-xl'
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <Text className='text-xl text-gray-300 font-mbold'>{title}</Text>
            <Text className='text-sm text-gray-300 font-mmedium pt-1 pb-8'>{description}</Text>
        </View>
    )
}
export default CategoryItem
