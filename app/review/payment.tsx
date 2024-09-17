import {View, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "../../components/common/Button";
import {router} from "expo-router";
import {createStatusRecord, createSurveyRecord} from "@/lib/SurveyService";
import {validatePayment} from "@/lib/PaymentService";
import {useGlobalContext} from "@/context/GlobalProvider";
import {SurveyStatus} from "@/constants/survey-status";

const Payment = () => {

    const {user} = useGlobalContext();

    const preSubmitAction = async () => {
        if (validatePayment()) {
            await createStatusRecord(user.$id, SurveyStatus.LifeStyleStep);
            await createSurveyRecord(user.$id);

            console.log('Payment successful, routing to questions section')
            router.push('/review/survey/multianswer/lifestyle')
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
