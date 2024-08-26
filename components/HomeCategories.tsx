import {View, Text} from 'react-native'
import React from 'react'

import {images} from '../constants'
import CategoryItem from "@/components/CategoryItem";

const HomeCategories = () => {

    const categories = [
        {
            title: 'Upper Body Region',
            imageUrl: images.upperBody,
            description: 'Neck, Shoulder and Arms',
            categoryUrl: '/upperbody'
        },
        {
            title: 'Core Region',
            imageUrl: images.core,
            description: 'Core Region is very important',
            categoryUrl: '/core'
        },
        {
            title: 'Hips Region',
            imageUrl: images.hips,
            description: 'Hips Region is very important',
            categoryUrl: '/hips'
        },
        {
            title: 'Feet Region',
            imageUrl: images.feet,
            description: 'Feet Region is very important',
            categoryUrl: '/feet'
        },
    ]

    return (
        <View className='self-start pl-2 w-full'>
            <View className='flex flex-row justify-start items-start'>
                <Text className='text-4xl font-cbebas text-gray-300'>
                    Body Regions
                </Text>
            </View>

            {categories.map((item) => (
                <CategoryItem
                    key={item.title}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    categoryUrl={item.categoryUrl}
                />
            ))}

        </View>
    )
}
export default HomeCategories
