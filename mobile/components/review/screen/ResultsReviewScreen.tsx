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
import {getLastReviewByUserId, getLastReviewByUserIdDeprecated} from "@/service/ReviewService";
import SideViewReviewResultTab from "@/components/review/result/tab/side/SideViewReviewResultTab";
import {BE} from "@/config";
import Review from "@/app/(tabs)/review";

const ResultsReviewScreen = ({user}) => {

    const testUserId = '1';

    const {data: reviewData} = BE
        ? useAppwrite<Review>(() => getLastReviewByUserId(testUserId))
        : useAppwrite<Review>(() => getLastReviewByUserIdDeprecated(testUserId))

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
            content: reviewData && reviewData.bodySegments ? (
                <FrontViewReviewResultTab
                    bodyMapRegions={reviewData.bodySegments.filter(bs => bs.segmentGroup === 'FrontView')}
                    selectedRegion={selectedRegion && selectedRegion.segmentGroup === 'FrontView' ? selectedRegion : emptyRegion}
                    setSelectedRegion={setSelectedRegion}
                    setBottomSheetVisible={setBottomSheetVisible}
                />
            ) : null
        },
        {
            key: "back-view",
            title: "Back View",
            content: reviewData && reviewData.bodySegments ? (
                <BackViewReviewResultTab
                    bodyMapRegions={reviewData.bodySegments.filter(bs => bs.segmentGroup === 'BackView')}
                    selectedRegion={selectedRegion && selectedRegion.segmentGroup === 'BackView' ? selectedRegion : emptyRegion}
                    setSelectedRegion={setSelectedRegion}
                    setBottomSheetVisible={setBottomSheetVisible}
                />
            ) : null
        },
        {
            key: "side-views",
            title: "Side Views",
            content: reviewData && reviewData.bodySegments ? (
                <SideViewReviewResultTab
                    bodyMapRegions={reviewData.bodySegments.filter(bs => bs.segmentGroup === 'SideView')}
                    selectedRegion={selectedRegion && selectedRegion.segmentGroup === 'SideView' ? selectedRegion : emptyRegion}
                    setSelectedRegion={setSelectedRegion}
                    setBottomSheetVisible={setBottomSheetVisible}
                />
            ) : null
        },
        {
            key: "results",
            title: "Summary",
            content: reviewData && reviewData.bodySegments ? (
                <SummaryReviewResultTab
                    userData={reviewData.userData}
                    problems={reviewData.problems}
                    trainingObjectives={reviewData.trainingObjectives}
                    generalRecommendations={reviewData.generalRecommendations}
                    bodyMapRegions={reviewData.bodySegments.filter(bs => bs.segmentGroup === 'SummaryView')}
                    selectedRegion={selectedRegion && selectedRegion.segmentGroup === 'SummaryView' ? selectedRegion : emptyRegion}
                    setSelectedRegion={setSelectedRegion}
                    setBottomSheetVisible={setBottomSheetVisible}
                />
            ) : null
        }
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
