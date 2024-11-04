import {ScrollView} from 'react-native'
import React from 'react'
import InteractiveBodyMap from "@/components/review/result/interactive-body-map/InteractiveBodyMap";
import SummaryEstimationArea from "@/components/review/result/tab/summary/SummaryEstimationArea";
import SummaryAccordion from "@/components/review/result/tab/summary/SummaryAccordion";
import Divider from "@/components/common/Divider";

const SummaryReviewResultTab = ({
                                    bodyMapRegions,
                                    selectedRegion,
                                    setSelectedRegion,
                                    setBottomSheetVisible,
                                    summaryEstimation
                                }) => {
    return (
        <ScrollView>
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
            <SummaryAccordion

            />
            <SummaryAccordion

            />
            <SummaryAccordion

            />
        </ScrollView>
    )
}
export default SummaryReviewResultTab
