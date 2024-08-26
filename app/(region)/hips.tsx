import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import CategoryItem from "@/components/CategoryItem";

import {images} from '../../constants'

const Hips = () => {

    const subcategories = [
        {
            title: 'MFR',
            imageUrl: images.hipsMfr,
            description: '{Hips MFR description}',
            categoryUrl: '/subcategory/hips-mfr'
        },
        {
            title: 'Stretching',
            imageUrl: images.hipsStretching,
            description: '{Hips Stretching description}',
            categoryUrl: '/subcategory/hips-stretching'
        },
        {
            title: 'Mobility',
            imageUrl: images.hipsMobility,
            description: '{Hips Mobility description}',
            categoryUrl: '/subcategory/hips-mobility'
        },
        {
            title: 'Drill',
            imageUrl: images.hipsDrill,
            description: '{Hips Drill description}',
            categoryUrl: '/subcategory/hips-drill'
        },
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title='Hips Region'/>
            </View>
            <ScrollView>
                <View className='w-full flex justify-center items-center my-2 w-full'>
                    {subcategories.map((item) => (
                        <CategoryItem
                            key={item.title}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            description={item.description}
                            categoryUrl={item.categoryUrl}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Hips
