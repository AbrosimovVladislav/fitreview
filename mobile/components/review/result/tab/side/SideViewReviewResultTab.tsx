import {ScrollView} from 'react-native'
import React from 'react'
import InteractiveBodyMap from "@/components/review/result/interactive-body-map/InteractiveBodyMap";

const SideViewReviewResultTab = ({bodyMapRegions, selectedRegion, setSelectedRegion, setBottomSheetVisible}) => {

    return (
        <ScrollView className='py-4'>
            <InteractiveBodyMap
                bodyMapRegions={bodyMapRegions}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
                sideView
            />
        </ScrollView>
    )
}
export default SideViewReviewResultTab
