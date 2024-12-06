import {View, Text, Image, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {fitReviewParams} from "@/constants/review";
import {Ionicons} from "@expo/vector-icons";
import Button from "@/components/common/Button";

import {images} from '../../../constants'
import {addNewReviewStatusRecord} from "@/service/ReviewService";
import {SurveyStatus} from "@/constants/survey";

const WelcomeReviewScreen = ({setStatus}) => {

    const testUserId = '1';

    const toPaymentStep = async () => {
        await addNewReviewStatusRecord(testUserId, SurveyStatus.PaymentScreen);
        setStatus(SurveyStatus.PaymentScreen);
    }

    return (
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
                    <Text className='text-md text-gray-300 font-mmedium pt-2 pb-6 px-4 text-center'>
                        Get a complete body analysis to improve health and reach your goals
                    </Text>
                    {
                        fitReviewParams.map((param,index) => {
                            return <View key={index} className='flex flex-row justify-center items-center pt-3'>
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
                        onPress={toPaymentStep}
                        containerStyles="mt-2"
                        icon={'caret-forward'}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
export default WelcomeReviewScreen
