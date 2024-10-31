import {View, ScrollView} from 'react-native'
import React, {useState} from 'react'
import PageHeader from "@/components/PageHeader";
import {isSubscriptionActive} from "@/lib/PaymentService";
import {router} from "expo-router";
import {createStatusRecord} from "@/lib/SurveyService";
import {defaultSecondSurveyStep} from "@/constants/survey";
import Tabs from "@/components/common/Tabs";
import InteractiveDiagram from "@/components/review/InteractiveDiagram";
import OtherViewsScreen from "@/components/review/OtherViewsScreen";
import ReviewRegionDetailsBottomSheet from "@/components/review/ReviewRegionDetailsBottomSheet";
import {newRegions} from "@/constants/temp";

const ReviewResultsScreen = ({user}) => {

    const [selectedRegion, setSelectedRegion] = useState('');
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

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
            content: <ScrollView><InteractiveDiagram
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            /></ScrollView>
        },
        {
            key: "back-view",
            title: "Back View",
            content: <ScrollView><InteractiveDiagram
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            /></ScrollView>
        },
        {
            key: "other-views",
            title: "Other Views",
            content: <ScrollView><OtherViewsScreen/></ScrollView>
        },
        {
            key: "results",
            title: "Results",
            content: <ScrollView><InteractiveDiagram
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            /></ScrollView>
        },
    ]

    return (
        <View className='flex-1 pt-4 px-1'>
            <PageHeader title='Fit Review'/>
            <Tabs tabs={tabs}/>
            {bottomSheetVisible && (
                <ReviewRegionDetailsBottomSheet
                    isOpen={bottomSheetVisible}
                    onClose={() => setBottomSheetVisible(false)}
                    region={newRegions.filter(r => r.name === selectedRegion)[0]}
                >
                </ReviewRegionDetailsBottomSheet>
            )}
        </View>
    )
}
export default ReviewResultsScreen
