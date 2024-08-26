import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from '../../constants'

import PageHeader from "@/components/PageHeader";
import CategoryItem from "@/components/CategoryItem";

const Upperbody = () => {

    const subcategories = [
        {
            title: 'MFR',
            imageUrl: images.upperBodyMfr,
            description: '{Upper Body MFR description}',
            categoryUrl: '/subcategory/upperbody-mfr'
        },
        {
            title: 'Stretching',
            imageUrl: images.upperBodyStretching,
            description: '{Upper Body Stretching description}',
            categoryUrl: '/subcategory/upperbody-stretching'
        },
        {
            title: 'Mobility',
            imageUrl: images.upperBodyMobility,
            description: '{Upper Body Mobility description}',
            categoryUrl: '/subcategory/upperbody-mobility'
        },
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title='Upper Body Region'/>
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
export default Upperbody
