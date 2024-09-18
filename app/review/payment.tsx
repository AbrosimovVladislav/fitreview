import {View, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "../../components/common/Button";
import {router} from "expo-router";
import {createStatusRecord, createSurveyRecord} from "@/lib/SurveyService";
import {validatePayment} from "@/lib/PaymentService";
import {useGlobalContext} from "@/context/GlobalProvider";
import {SurveyStatus, surveySteps} from "@/constants/survey";

const Payment = () => {

    const {user} = useGlobalContext();

    const preSubmitAction = async () => {
        if (validatePayment()) {
            //ToDo Сейчас здесь логика на прохождение первого опроса, но
            // в будущем опрос может быть не всегда первым и будет другая
            // логика связанная с оплатой или опросом повторным
            await createStatusRecord(user.$id, SurveyStatus.LifeStyleStep);
            await createSurveyRecord(user.$id);

            console.log('[Payment_preSubmitAction] Payment successful, routing to questions section')
            router.push(`/review/survey/${surveySteps[0].slug}`)
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='pt-4'>
                    <PageHeader title='Payment'/>
                    <Button
                        title="Proceed to survey"
                        onPress={preSubmitAction}
                        containerStyles="mt-2 mx-6"
                        icon={'ribbon'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Payment
