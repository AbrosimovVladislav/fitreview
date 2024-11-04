import {ScrollView, View} from 'react-native'
import React from 'react'
import InteractiveBodyMap from "@/components/review/result/interactive-body-map/InteractiveBodyMap";
import SummaryEstimationArea from "@/components/review/result/tab/summary/SummaryEstimationArea";
import MainProblemsArea from "@/components/review/result/tab/summary/MainProblemsArea";
import Divider from "@/components/common/Divider";

const SummaryReviewResultTab = ({
                                    bodyMapRegions,
                                    selectedRegion,
                                    setSelectedRegion,
                                    setBottomSheetVisible,
                                    summaryEstimation
                                }) => {
    return (
        <ScrollView className='px-4'>
            <InteractiveBodyMap
                bodyMapRegions={bodyMapRegions}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
                summary
            />
            <SummaryEstimationArea
                summaryEstimation={summaryEstimation}
            />
                <Divider/>

            <MainProblemsArea

            />
                <Divider/>
        </ScrollView>
    )
}
export default SummaryReviewResultTab
