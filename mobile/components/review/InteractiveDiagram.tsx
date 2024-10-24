import {View, Text, TouchableOpacity, Image} from 'react-native'
import React, {useState} from 'react'
import {newRegions} from "@/constants/temp";
import {Ionicons} from "@expo/vector-icons";
import ReviewRegionDetailsBottomSheet from "@/components/review/ReviewRegionDetailsBottomSheet";

const InteractiveDiagram = () => {

    const [selected, setSelected] = useState('');
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

    function handleRegionPress(regionName: string) {
        setSelected(prevState => prevState === regionName ? '' : regionName)
    }

    function handleDetailsPress() {
        setBottomSheetVisible(true);
    }

    return (
        <View>

            <Text className="text-md text-center text-gray-100 pt-3 font-mregular">
                Warming up your glutes is essential for enhancing movement efficiency,
                preventing injuries
            </Text>

            <View className="flex flex-row flex-wrap px-4 pt-3">
                {newRegions.map((region, index) => (
                    <View key={index}
                          className={
                              `flex w-1/2
                                  ${region.name.includes('R') ? 'items-end' : 'items-start'}`
                          }
                    >
                        <TouchableOpacity
                            onPress={() => handleRegionPress(region.name)}
                            className="flex items-start"
                        >
                            <Image
                                source={{uri: selected === region.name ? region.diagramImage : region.userImage}}
                                className="w-32 h-32 border-0.5 border-orange-300"
                                resizeMode="contain"
                            />
                            {selected === region.name && (
                                <TouchableOpacity
                                    onPress={handleDetailsPress}
                                    className={region.name.includes("L") ? "absolute top-2 right-2" : "absolute top-2 left-2"}
                                >
                                    <Ionicons name='information-circle' size={40}
                                              color='#FF9001'/>
                                </TouchableOpacity>
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            {bottomSheetVisible && (
                <ReviewRegionDetailsBottomSheet
                    isOpen={bottomSheetVisible}
                    onClose={() => setBottomSheetVisible(false)}
                    region={newRegions.filter(r => r.name === selected)[0]}
                >
                </ReviewRegionDetailsBottomSheet>
            )}
        </View>
    )
}
export default InteractiveDiagram
