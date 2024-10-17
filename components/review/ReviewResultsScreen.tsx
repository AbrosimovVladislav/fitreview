import {View, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {isSubscriptionActive} from "@/lib/PaymentService";
import {router} from "expo-router";
import {createStatusRecord} from "@/lib/SurveyService";
import {defaultSecondSurveyStep} from "@/constants/survey";
import Tabs from "@/components/common/Tabs";
import InteractiveDiagram from "@/components/review/InteractiveDiagram";
import OtherViewsScreen from "@/components/review/OtherViewsScreen";

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

    const tabs = [
        {
            key: "front-view",
            title: "Front View",
            content: <ScrollView><InteractiveDiagram/></ScrollView>
        },
        {
            key: "back-view",
            title: "Back View",
            content: <ScrollView><InteractiveDiagram/></ScrollView>
        },
        {
            key: "other-views",
            title: "Other Views",
            content: <ScrollView><OtherViewsScreen/></ScrollView>
        },
        {
            key: "results",
            title: "Results",
            content: <ScrollView><InteractiveDiagram/></ScrollView>
        },
    ]

    return (
        <View className='flex-1 pt-4 px-1'>
            <PageHeader title='Fit Review'/>
            <Tabs tabs={tabs}/>
        </View>
    )
}
export default ReviewResultsScreen
