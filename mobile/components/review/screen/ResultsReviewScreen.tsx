import {View} from 'react-native'
import React, {useState} from 'react'
import PageHeader from "@/components/PageHeader";
import {isSubscriptionActive} from "@/lib/PaymentService";
import {router} from "expo-router";
import {createStatusRecord} from "@/lib/SurveyService";
import {defaultSecondSurveyStep} from "@/constants/survey";
import Tabs from "@/components/common/Tabs";
import DetailsBottomSheet from "@/components/review/result/DetailsBottomSheet";
import {emptyRegion} from "@/constants/temp";
import SummaryReviewResultTab from "@/components/review/result/tab/summary/SummaryReviewResultTab";
import FrontViewReviewResultTab from "@/components/review/result/tab/front/FrontViewReviewResultTab";
import BackViewReviewResultTab from "@/components/review/result/tab/back/BackViewReviewResultTab";
import useAppwrite from "@/lib/useAppwrite";
import {Training} from "@/constants/interface";
import {getLastReviewByUserId} from "@/service/ReviewService";

const ResultsReviewScreen = ({user}) => {

    const {data: reviewData} = useAppwrite<Training>(() => getLastReviewByUserId('1'))

    const [selectedRegion, setSelectedRegion] = useState(emptyRegion);
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
                bodyMapRegions={reviewData.frontView}
                selectedRegion={selectedRegion && selectedRegion.group==='FrontView' ? selectedRegion : emptyRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            />
        },
        {
            key: "back-view",
            title: "Back View",
            content: <BackViewReviewResultTab
                bodyMapRegions={reviewData.backView}
                selectedRegion={selectedRegion && selectedRegion.group==='BackView' ? selectedRegion : emptyRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            />
        },
        {
            key: "results",
            title: "Summary",
            content: <SummaryReviewResultTab
                bodyMapRegions={reviewData.summaryView}
                summaryData={reviewData.summaryData}
                selectedRegion={selectedRegion && selectedRegion.group==='SummaryView' ? selectedRegion : emptyRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
            />
        },
        // {
        //     key: "other-views",
        //     title: "Other Views",
        //     content: <OtherViewsReviewResultTab/>
        // },
    ]

    return (
        <View className='flex-1 pt-4 px-1'>
            <PageHeader title='Fit Review' paddingBottom="pb-0"/>
            <Tabs tabs={tabs}/>
            {bottomSheetVisible && (
                <DetailsBottomSheet
                    isOpen={bottomSheetVisible}
                    onClose={() => setBottomSheetVisible(false)}
                    region={selectedRegion}
                >
                </DetailsBottomSheet>
            )}
        </View>
    )
}
export default ResultsReviewScreen
