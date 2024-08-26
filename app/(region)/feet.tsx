import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";

import {images} from '../../constants'
import CategoryItem from "@/components/CategoryItem";

const Feet = () => {

    const subcategories = [
        {
            title: 'MFR',
            imageUrl: images.feetMfr,
            description: '{Feet MFR description}',
            categoryUrl: '/subcategory/feet-mfr'
        },
        {
            title: 'Manual',
            imageUrl: images.feetManual,
            description: '{Feet Manual description}',
            categoryUrl: '/subcategory/feet-manual'
        },
        {
            title: 'Stretching',
            imageUrl: images.feetStretching,
            description: '{Feet Stretching description}',
            categoryUrl: '/subcategory/feet-stretching'
        },
        {
            title: 'Drill',
            imageUrl: images.feetDrill,
            description: '{Feet Drill description}',
            categoryUrl: '/subcategory/feet-drill'
        },
        {
            title: 'Glutes And Feet Set',
            imageUrl: images.feetGlutesAndFeetSet,
            description: '{Feet Glutes And Feet Set description}',
            categoryUrl: '/subcategory/feet-glutesandfeetset'
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
export default Feet
