import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import {router} from "expo-router";

import {images} from '../../constants'
import {Ionicons} from "@expo/vector-icons";
import Button from "@/components/common/Button";
import Button2 from "@/components/common/Button";

const Review = () => {

    const fitReviewParams = [
        'Lorem Ipsum is simply dummy text of printing',
        'Lorem Ipsum is simply dummy text of printing',
        'Lorem Ipsum is simply dummy text of printing',
        'Lorem Ipsum is simply dummy text of printing'
    ]

    const onPressGetStarted = () => {

    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
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
                        <Text className='text-md text-gray-300 font-mmedium pt-2 pb-6 text-center'>
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
                        <Button2
                            title="Get Started"
                            onPress={() => router.push('/review/payment')}
                            containerStyles="mt-2"
                            icon={'caret-forward'}
                        />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}
export default Review
