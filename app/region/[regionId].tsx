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
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/upperbody-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: images.upperBodyStretching,
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/upperbody-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: images.upperBodyMobility,
                    description: 'Improving joint range and fluid movement',
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
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/core-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: images.coreStretching,
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/core-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: images.coreMobility,
                    description: 'Improving joint range and fluid movement',
                    categoryUrl: '/subcategory/core-mobility'
                },
                {
                    title: 'Breathing',
                    imageUrl: images.coreBreathing,
                    description: 'Supporting core with proper breathing',
                    categoryUrl: '/subcategory/core-breathing'
                },
                {
                    title: 'Drill',
                    imageUrl: images.coreDrill,
                    description: 'Building strength and endurance',
                    categoryUrl: '/subcategory/core-drill'
                }
            ]
        },
        {
            regionTitle: 'Hips',
            subcategories: [
                {
                    title: 'MFR',
                    imageUrl: images.hipsMfr,
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/hips-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: images.hipsStretching,
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/hips-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: images.hipsMobility,
                    description: 'Improving joint range and fluid movement',
                    categoryUrl: '/subcategory/hips-mobility'
                },
                {
                    title: 'Activation',
                    imageUrl: images.hipsActivation,
                    description: 'Preparing hips for active movement',
                    categoryUrl: '/subcategory/hips-activation'
                },
                {
                    title: 'Drill',
                    imageUrl: images.hipsDrill,
                    description: 'Building strength and endurance',
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
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/feet-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: images.feetStretching,
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/feet-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: images.feetMobility,
                    description: 'Improving joint range and fluid movement',
                    categoryUrl: '/subcategory/feet-mobility'
                },
                {
                    title: 'Drill',
                    imageUrl: images.feetDrill,
                    description: 'Building strength and endurance',
                    categoryUrl: '/subcategory/feet-drill'
                },
                {
                    title: 'Glutes And Feet Set',
                    imageUrl: images.feetGlutesAndFeetSet,
                    description: 'Engaging glutes for power and balance',
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
