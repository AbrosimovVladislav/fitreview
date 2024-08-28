import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import CategoryItem from "@/components/CategoryItem";
import {useLocalSearchParams} from "expo-router";

import {images} from '../../constants'

const RegionPage = () => {

    const {regionId} = useLocalSearchParams();

    const regions = [
        {
            regionTitle: 'Upper Body',
            subcategories: [
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
        },
        {
            regionTitle: 'Core',
            subcategories: [
                {
                    title: 'MFR',
                    imageUrl: images.coreMfr,
                    description: '{Core MFR description}',
                    categoryUrl: '/subcategory/core-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: images.coreStretching,
                    description: '{Core Stretching description}',
                    categoryUrl: '/subcategory/core-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: images.coreMobility,
                    description: '{Core Mobility description}',
                    categoryUrl: '/subcategory/core-mobility'
                },
                {
                    title: 'Breathing',
                    imageUrl: images.coreBreathing,
                    description: '{Core Breathing description}',
                    categoryUrl: '/subcategory/core-breathing'
                },
                {
                    title: 'Abs Activation',
                    imageUrl: images.coreAbsActivation,
                    description: '{Core Abs Activation description}',
                    categoryUrl: '/subcategory/core-absActivation'
                }
            ]
        },
        {
            regionTitle: 'Hips',
            subcategories: [
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
                }
            ]
        },
        {
            regionTitle: 'Feet',
            subcategories: [
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
                }
            ]
        },
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title={regionId + ' Region'}/>
            </View>
            <ScrollView>
                <View className='w-full flex justify-center items-center my-2 w-full'>
                    {regions.find(region => region.regionTitle === regionId).subcategories.map((item) => (
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
export default RegionPage
