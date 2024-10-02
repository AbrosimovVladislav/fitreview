import {View, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import Button from "@/components/common/Button";
import {isSubscriptionActive} from "@/lib/PaymentService";
import {router} from "expo-router";
import {createStatusRecord} from "@/lib/SurveyService";
import {defaultSecondSurveyStep, SurveyStatus} from "@/constants/survey";

const ReviewResultsScreen = ({user}) => {

    const preRefreshAction = async () => {

        if (isSubscriptionActive()) {
            //создать новую запись или кочевряжим старую
            //изменить текущий статус на начало второго опроса или конкретный шат
            await createStatusRecord(user.$id, defaultSecondSurveyStep.status);

            router.push(`/review/survey/${defaultSecondSurveyStep.slug}`)
        } else {
            router.push("/review/payment");
        }
    }

    return (
        <ScrollView>
            <View className='pt-4'>
                <PageHeader title='Fit Review'/>
                <Button
                    title="Results"
                    containerStyles="mt-2 mx-6"
                    icon={'ribbon'}
                    onPress={() => {
                    }}/>
                <Button
                    title="Refresh Fit Review"
                    containerStyles="mt-2 mx-6"
                    icon={'ribbon'}
                    onPress={preRefreshAction}/>
            </View>
        </ScrollView>
    )
}
export default ReviewResultsScreen
