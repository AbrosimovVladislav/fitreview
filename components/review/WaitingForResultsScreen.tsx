import {View, Text, Image, ScrollView} from 'react-native'
import React from 'react'

import {images} from '../../constants'
import Button from "@/components/common/Button";
import {createStatusRecord} from "@/lib/SurveyService";
import {SurveyStatus} from "@/constants/survey";

const WaitingForResultsScreen = ({user}) => {
    return (
        <ScrollView>
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

            <Button
                className='p-2 bg-red'
                title='Test Results'
                onPress={async () => await createStatusRecord(user.$id, SurveyStatus.FirstReviewDone)}
            />
        </ScrollView>
    )
}
export default WaitingForResultsScreen
