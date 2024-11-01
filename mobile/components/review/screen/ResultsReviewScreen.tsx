import {View} from 'react-native'
import React, {useState} from 'react'
import PageHeader from "@/components/PageHeader";
import {isSubscriptionActive} from "@/lib/PaymentService";
import {router} from "expo-router";
import {createStatusRecord} from "@/lib/SurveyService";
import {defaultSecondSurveyStep} from "@/constants/survey";
import Tabs from "@/components/common/Tabs";
import OtherViewsReviewResultTab from "@/components/review/result/tab/other/OtherViewsReviewResultTab";
import DetailsBottomSheet from "@/components/review/result/DetailsBottomSheet";
import {bodyMapRegions} from "@/constants/temp";
import SummaryReviewResultTab from "@/components/review/result/tab/summary/SummaryReviewResultTab";
import FrontViewReviewResultTab from "@/components/review/result/tab/front/FrontViewReviewResultTab";
import BackViewReviewResultTab from "@/components/review/result/tab/back/BackViewReviewResultTab";

const ResultsReviewScreen = ({user}) => {

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
            content: <FrontViewReviewResultTab
                bodyMapRegions={bodyMapRegions.filter(item => 'FrontView' === item.group)}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            />
        },
        {
            key: "back-view",
            title: "Back View",
            content: <BackViewReviewResultTab
                bodyMapRegions={bodyMapRegions.filter(item => 'BackView' === item.group)}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            />
        },
        {
            key: "other-views",
            title: "Other Views",
            content: <OtherViewsReviewResultTab/>
        },
        {
            key: "results",
            title: "Summary",
            content: <SummaryReviewResultTab
                bodyMapRegions={bodyMapRegions.filter(item => 'FrontView' === item.group)}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            />
        },
    ]

    return (
        <View className='flex-1 pt-4 px-1'>
            <PageHeader title='Fit Review' paddingBottom="pb-0"/>
            <Tabs tabs={tabs}/>
            {bottomSheetVisible && (
                <DetailsBottomSheet
                    isOpen={bottomSheetVisible}
                    onClose={() => setBottomSheetVisible(false)}
                    region={bodyMapRegions.filter(r => r.name === selectedRegion)[0]}
                >
                </DetailsBottomSheet>
            )}
        </View>
    )
}
export default ResultsReviewScreen
