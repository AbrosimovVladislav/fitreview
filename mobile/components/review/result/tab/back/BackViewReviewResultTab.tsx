import {ScrollView} from 'react-native'
import React from 'react'
import InteractiveBodyMap from "@/components/review/result/interactive-body-map/InteractiveBodyMap";

const BackViewReviewResultTab = ({bodyMapRegions, selectedRegion, setSelectedRegion, setBottomSheetVisible}) => {
    return (
        <ScrollView><InteractiveBodyMap
            bodyMapRegions={bodyMapRegions}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            setBottomSheetVisible={setBottomSheetVisible}
        /></ScrollView>
    )
}
export default BackViewReviewResultTab
