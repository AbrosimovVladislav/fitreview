import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {newRegions} from "@/constants/temp";
import {Ionicons} from "@expo/vector-icons";

const InteractiveDiagram = ({selectedRegion, setSelectedRegion, setBottomSheetVisible}) => {

    function handleRegionPress(regionName: string) {
        setSelectedRegion(prevState => prevState === regionName ? '' : regionName)
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
                                source={{uri: selectedRegion === region.name ? region.diagramImage : region.userImage}}
                                className="w-32 h-32"
                                resizeMode="contain"
                            />
                            {selectedRegion === region.name && (
                                <TouchableOpacity
                                    onPress={handleDetailsPress}
                                    className={region.name.includes("L") ? "absolute top-10 right-0" : "absolute top-10 left-0"}
                                >
                                    <Ionicons name='search-circle' size={48}
                                              color='#FF9001'/>
                                </TouchableOpacity>
                            )}
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    )
}
export default InteractiveDiagram
