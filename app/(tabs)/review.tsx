import {View, Text, ScrollView, Image} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import {router, useFocusEffect} from "expo-router";

import {images} from '../../constants'
import {Ionicons} from "@expo/vector-icons";
import Button from "@/components/common/Button";
import {useGlobalContext} from "@/context/GlobalProvider";
import {getCurrentStatus} from "@/lib/SurveyService";
import {SurveyStatus} from "@/constants/survey-status";

const Review = () => {

    const {user} = useGlobalContext();

    const [status, setStatus] = useState(null);

    useEffect(() => {
        fetchStatus();
    }, [])

    useFocusEffect(
        useCallback(() => {
            fetchStatus();
        }, [])
    );

    const fetchStatus = async () => {
        try {
            const currentStatus = await getCurrentStatus(user.$id);
            console.log("[Review_fetchStatus] currentStatus " + currentStatus);
            setStatus(currentStatus);
        } catch (error) {
            console.error("[Review_fetchStatus] Status receiving error:", error);
        }
    };

    const fitReviewParams = [
        'Workouts designed for your needs',
        'Detailed body and movement analysis',
        'Easy-to-use visual feedback for progress',
        'Coach support to your questions anytime'
    ]


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
                    Get a complete body analysis to improve health and reach your goals
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

    const reviewResultsScreen = <ScrollView>
        <View className='pt-4'>
            <PageHeader title='Fit Review'/>
            <Button
                title="Results"
                containerStyles="mt-2 mx-6"
                icon={'ribbon'}
                onPress={() => console.log("[Review_reviewResultsScreen] results")}/>
        </View>
    </ScrollView>

    //ToDo будет проверка статуса на старте, если какой то из шагов опроса, то будет на него раут, но если нет,
    // то только при статусе FirstReviewDone перенаправлять на results, иначе отображать что ожидание или ошибка
    return (
        <SafeAreaView className='bg-primary h-full'>
            {status
                ? status === SurveyStatus.WaitingForResults ? waitingForResultsScreen : reviewResultsScreen
                : initialFRScreen}
        </SafeAreaView>
    )
}
export default Review
