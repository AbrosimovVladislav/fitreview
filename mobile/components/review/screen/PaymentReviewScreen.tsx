import {View, ScrollView} from 'react-native'
import React from 'react'
import {validatePayment} from "@/service/PaymentService";
import {addNewReviewStatusRecord} from "@/service/ReviewService";
import {SurveyStatus} from "@/constants/survey";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/common/Button";

const PaymentReviewScreen = ({setStatus}) => {

    const toSurveyStep = async () => {
        if (validatePayment()) {
            //ToDo Сейчас здесь логика на прохождение первого опроса, но
            // в будущем опрос может быть не всегда первым и будет другая
            // логика связанная с оплатой или опросом повторным
            await addNewReviewStatusRecord(SurveyStatus.FirstSurvey);
            setStatus(SurveyStatus.FirstSurvey);
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='pt-4'>
                    <PageHeader title='Payment'/>
                    <Button
                        title="Proceed to survey"
                        onPress={toSurveyStep}
                        containerStyles="mt-2 mx-6"
                        icon={'ribbon'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PaymentReviewScreen
