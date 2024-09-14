import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from '../../constants'
import CategoryItem from "@/components/CategoryItem";
import {useGlobalContext} from "@/context/GlobalProvider";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import Divider from "@/components/common/Divider";

const Home = () => {

    const {user} = useGlobalContext();

    const regions = [
        {
            title: 'Upper Body Region',
            imageUrl: images.upperBody,
            description: 'Shoulder blades, chest and shoulders',
            categoryUrl: '/region/Upper Body'
        },
        {
            title: 'Core Region',
            imageUrl: images.core,
            description: 'Central support for body strength',
            categoryUrl: '/region/Core'
        },
        {
            title: 'Hips Region',
            imageUrl: images.hips,
            description: 'Foundation for movement and balance',
            categoryUrl: '/region/Hips'
        },
        {
            title: 'Feet Region',
            imageUrl: images.feet,
            description: 'Control for every step',
            categoryUrl: '/region/Feet'
        },
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full min-h-[80vh] items-center px-4 my-6'>

                    <View name='home-top-area' className='flex flex-col gap-3 w-full'>
                        <View className='flex flex-row justify-between items-center'>
                            <Image
                                source={{uri: user?.avatar}}
                                className='w-14 h-14 border border-secondary rounded-xl'
                                resizeMode='contain'
                            />
                            <TouchableOpacity onPress={() => router.push('/profile')}>
                                <Ionicons name='notifications-outline' size={28} color='white'/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text className='text-md font-mmedium text-gray-300'>
                                Hello, Good Morning
                            </Text>
                            <Text className='text-3xl font-cbebas text-gray-300 pt-2'>
                                {user?.username} !
                            </Text>
                        </View>
                    </View>

                    <View name='home-banner-area' className='pb-4'>
                        <TouchableOpacity onPress={() => router.push('/review')}>
                            <Image
                                source={images.bannerGetFitReview}
                                className='max-w-[360px] h-[270px] '
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </View>

                    <Divider orientation='horizontal' mb={6} className='bg-gray-700'/>

                    <Text className='text-4xl self-start font-cbebas text-gray-300 pb-3'>
                        Body Regions
                    </Text>
                    <View name='home-regions-area' className='items-center w-full'>
                        {regions.map((item) => (
                            <CategoryItem
                                key={item.title}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                description={item.description}
                                categoryUrl={item.categoryUrl}
                            />
                        ))}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home
