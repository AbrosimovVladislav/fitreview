import {View, Text, Dimensions} from 'react-native'
import React from 'react'
import LoadingView from "@/components/LoadingView";
import TouchableRegion from "@/components/review/result/interactive-body-map/TouchableRegion";

const InteractiveBodyMap = ({bodyMapRegions, selectedRegion, setSelectedRegion, setBottomSheetVisible, summary}) => {

    const {width} = Dimensions.get('window');
    const imageSizeClass = width < 400 ? 'w-32 h-32' : 'w-36 h-36';

    return !bodyMapRegions
        ? <LoadingView/>
        : (
            <View>
                <Text className="text-md text-center text-gray-100 pt-4 pb-2 font-mregular">
                    To check the details, tap on the body region
                </Text>

                <View className="flex flex-row flex-wrap px-4 pt-3">
                    {bodyMapRegions.map((region, index) => (
                        <TouchableRegion
                            index={index}
                            region={region}
                            selectedRegion={selectedRegion}
                            setSelectedRegion={setSelectedRegion}
                            setBottomSheetVisible={setBottomSheetVisible}
                            summary={summary}
                            imageSizeClass={imageSizeClass}
                        />
                    ))}
                </View>
            </View>
        )
}
export default InteractiveBodyMap
