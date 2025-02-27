import {View, Text, Image, ScrollView, RefreshControl, ActivityIndicator} from 'react-native'
import React from 'react'

import {images} from '../../../constants'
import {SurveyStatus} from "@/constants/survey";
import {addNewReviewStatus} from "@/service/ReviewService";
import {useGlobalContext} from "@/context/GlobalProvider";

const WaitingForResultReviewScreen = ({setStatus, onRefresh, refreshing}) => {

    const {reviewId} = useGlobalContext();

    const testResultsOnPressTEMPORARY = async () => {
        await addNewReviewStatus(reviewId, SurveyStatus.ReviewResults);
        setStatus(SurveyStatus.ReviewResults);
    }

    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
            {refreshing ? (
                // Show loader, if refreshing is active
                <ActivityIndicator size="large" color="#FFFFFF"/>
            ) : (
                <View className='flex justify-center items-center gap-16 p-4 pt-8'>
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
            )}
            {/*<Button*/}
            {/*    className='p-2 bg-red'*/}
            {/*    title='Test Results'*/}
            {/*    onPress={testResultsOnPressTEMPORARY}*/}
            {/*/>*/}
        </ScrollView>
    )
}
export default WaitingForResultReviewScreen
