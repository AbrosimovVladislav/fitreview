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

    const getBorderClass = (regionName) => {
        switch (regionName) {
            case 'R1':
                return 'border-r-0.5 border-b-0.5'; // Верхняя левая картинка
            case 'R2':
                return 'border-r-0.5 border-b-0.5'; // Верхняя правая картинка
            case 'R3':
                return 'border-r-0.5 border-b-0.5'; // Средняя левая картинка
            case 'R4':
                return 'border-r-0.5'; // Средняя правая картинка
            case 'L1':
                return 'border-b-0.5'; // Нижняя левая картинка
            case 'L2':
                return 'border-b-0.5'; // Нижняя правая картинка
            case 'L3':
                return 'border-b-0.5'; // Нижняя левая картинка
            case 'L4':
                return ''; // Нижняя правая картинка
            default:
                return ''; // Картинки с полными границами
        }
    };

    return (
        <View>
            <Text className="text-md text-center text-gray-100 pt-4 pb-2 font-mregular">
                To check the details, tap on the body region
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
                            className={`flex items-start ${getBorderClass(region.name)} border-orange-300`}
                        >
                            <Image
                                source={{uri: selected === region.name ? region.diagramImage : region.userImage}}
                                className="w-32 h-32"
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
