import {View, Text, Dimensions} from 'react-native'
import React from 'react'
import LoadingView from "@/components/LoadingView";
import TouchableRegion from "@/components/review/result/interactive-body-map/TouchableRegion";

const InteractiveBodyMap = ({bodyMapRegions, selectedRegion, setSelectedRegion, setBottomSheetVisible, summary, sideView}) => {

    const {width} = Dimensions.get('window');

    return !bodyMapRegions
        ? <LoadingView/>
        : (
            <View>
                {
                    !summary &&
                    <Text className="text-md text-center text-gray-100 pt-4 pb-2 font-mregular">
                        To check the details, tap on the body region
                    </Text>
                }

                <View className="flex flex-row flex-wrap px-4 pt-2">
                    {bodyMapRegions.map((region, index) => (
                        <TouchableRegion
                            key={index}
                            index={index}
                            region={region}
                            selectedRegion={selectedRegion}
                            setSelectedRegion={setSelectedRegion}
                            setBottomSheetVisible={setBottomSheetVisible}
                            summary={summary}
                            sideView={sideView}
                            screenWidth={width}
                        />
                    ))}
                </View>
            </View>
        )
}
export default InteractiveBodyMap
