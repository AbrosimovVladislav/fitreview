import {ScrollView} from 'react-native'
import React from 'react'
import InteractiveResultsDiagram from "@/components/review/InteractiveResultsDiagram";

const ReviewResultsTab = ({regions, selectedRegion, setSelectedRegion, setBottomSheetVisible}) => {
    return (
        <ScrollView><InteractiveResultsDiagram
            regions={regions}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            setBottomSheetVisible={setBottomSheetVisible}
        /></ScrollView>
    )
}
export default ReviewResultsTab
