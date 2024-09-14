import {View, Text, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import {router} from "expo-router";

import {images} from '../../constants'
import {Ionicons} from "@expo/vector-icons";
import Button from "@/components/common/Button";

const Review = () => {

    const [status, setStatus] = useState('NotStarted');

    const fitReviewParams = [
        'Lorem Ipsum is simply dummy text of printing',
        'Lorem Ipsum is simply dummy text of printing',
        'Lorem Ipsum is simply dummy text of printing',
        'Lorem Ipsum is simply dummy text of printing'
    ]

    const onPressGetStarted = () => {

    }

    const initialFRScreen = <ScrollView>
        <View className='pt-4'>
            <PageHeader title='Fit Review'/>
        </View>

        <View className='flex flex-col pt-2'>
            <View name='image-area' className='flex justify-center items-center rounded-xl'>
                <Image
                    source={images.cards}
                    className='max-w-[400px] h-[260px] rounded-xl '
                    resizeMode='contain'
                />
            </View>

            <View name='title-and-description-area' className='flex flex-col justify-center items-center pt-4'>
                <Text className='text-md text-gray-300 font-mmedium pt-2 pb-6 px-4 text-center'>
                    It is a long established fact that a reader
                    will be distracted by the readable
                </Text>
                {
                    fitReviewParams.map(param => {
                        return <View key={Math.random()} className='flex flex-row justify-center items-center pt-3'>
                            <Ionicons name='checkmark-done' size={22} color='#FF9001'/>
                            <Text className={'text-gray-100 pt-1 pl-2 font-msemibold'}>
                                {param}
                            </Text>
                        </View>
                    })
                }
            </View>

            <View name='button' className='pt-10 px-4'>
                <Button
                    title="Get Started"
                    onPress={() => router.push('/review/payment')}
                    containerStyles="mt-2"
                    icon={'caret-forward'}
                />
            </View>
        </View>


    </ScrollView>
    const waitingForResultsScreen = <ScrollView>
        <PageHeader/>
        <View className='flex justify-center items-center gap-16 p-4'>
            <View className='flex gap-3 justify-center items-center'>
                <Text className="text-4xl text-gray-300 text-semibold mt-4 font-cbebas">
                    Perfect !
                </Text>
                <Text className="text-md text-center text-gray-100 font-mregular">
                    Your request is received. We’ll analyze your data and share insights soon
                </Text>
            </View>
            <Image
                source={images.cards}
                className='max-w-[420px] h-[280px] rounded-xl '
                resizeMode='contain'
            />
            <View className='flex gap-2'>
                <Text className="text-xl text-center text-secondary-100 font-cbebas">
                    Discover your potential
                </Text>
                <Text className="text-md text-center text-gray-100 font-mmedium">
                    We’ll help you understand your body and reach your goals effectively
                </Text>
            </View>

        </View>
    </ScrollView>

    return (
        <SafeAreaView className='bg-primary h-full'>
            {status === 'NotStarted'
                ? initialFRScreen
                : waitingForResultsScreen}
        </SafeAreaView>
    )
}
export default Review
