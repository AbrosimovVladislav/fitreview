import {View, Text, Dimensions} from 'react-native'
import React from 'react'
import LoadingView from "@/components/LoadingView";
import TouchableRegion from "@/components/review/result/interactive-body-map/TouchableRegion";
import {IconInfoOctagon} from "@tabler/icons-react-native";
import Tooltip from 'rn-tooltip';
import {reivewPreDefine} from "@/constants/review";

const InteractiveBodyMap = ({
                                bodyMapRegions,
                                selectedRegion,
                                setSelectedRegion,
                                setBottomSheetVisible,
                                summary,
                                sideView
                            }) => {

    const {width} = Dimensions.get('window');

    return !bodyMapRegions
        ? <LoadingView/>
        : (
            <View>
                {
                    !summary &&
                    <View className='flex-row justify-center pt-2 pb-2'>
                        <Text className="text-md text-center pt-2 pr-3 text-gray-100 font-mregular">
                            To check the details, tap on the body region
                        </Text>
                        <Tooltip
                            popover={<Text className={`text-white`}>{reivewPreDefine}</Text>}
                            height={300}
                            width={350}
                            backgroundColor="rgba(0,0,0,0.8)"
                        >
                            <IconInfoOctagon size={32} color='#FF8E01'/>
                        </Tooltip>
                    </View>

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
