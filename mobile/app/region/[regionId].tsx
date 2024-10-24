import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import {useLocalSearchParams} from "expo-router";

import ListItem from "@/components/common/ListItem";

const RegionPage = () => {

    const {regionId} = useLocalSearchParams();

    const regions = [
        {
            regionTitle: 'Upper Body',
            subcategories: [
                {
                    title: 'MFR',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2886300266dde557c/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/upperbody-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f28857000737c50320/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/upperbody-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2885d002226bf1f35/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
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
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f288a60031dd2ecd7a/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/core-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2889c0000f08a8d16/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/core-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f288a10016d7ce4cf9/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Improving joint range and fluid movement',
                    categoryUrl: '/subcategory/core-mobility'
                },
                {
                    title: 'Breathing',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f288ad002559f6741e/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Supporting core with proper breathing',
                    categoryUrl: '/subcategory/core-breathing'
                },
                {
                    title: 'Drill',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f288b300090dee7ca4/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
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
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2882500020e179884/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/hips-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f288150003279d9d51/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/hips-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2881d002ce9aa533e/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Improving joint range and fluid movement',
                    categoryUrl: '/subcategory/hips-mobility'
                },
                {
                    title: 'Activation',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2884200085a24ee5b/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Preparing hips for active movement',
                    categoryUrl: '/subcategory/hips-activation'
                },
                {
                    title: 'Drill',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2882c002fd91cd63d/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
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
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f28876001c157f48bd/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Muscle relaxation and tension relief',
                    categoryUrl: '/subcategory/feet-mfr'
                },
                {
                    title: 'Stretching',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2887100109752c7d8/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Flexibility increase for better performance',
                    categoryUrl: '/subcategory/feet-stretching'
                },
                {
                    title: 'Mobility',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2887c000636496692/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Improving joint range and fluid movement',
                    categoryUrl: '/subcategory/feet-mobility'
                },
                {
                    title: 'Drill',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2887c000636496692/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
                    description: 'Building strength and endurance',
                    categoryUrl: '/subcategory/feet-drill'
                },
                {
                    title: 'Glutes And Feet Set',
                    imageUrl: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66f2888c00234a320a2f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314',
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
                <View className='w-full min-h-[80vh] items-center px-4'>
                    <View className='w-full my-2'>
                        {regions.find(region => region.regionTitle === regionId).subcategories.map((item) => (
                            <ListItem
                                key={item.title}
                                title={item.title}
                                image={item.imageUrl}
                                description={item.description}
                                route={item.categoryUrl}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default RegionPage
