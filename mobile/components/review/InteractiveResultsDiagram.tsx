import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import LoadingView from "@/components/LoadingView";

const InteractiveDiagram = ({regions, selectedRegion, setSelectedRegion, setBottomSheetVisible}) => {

    const {width} = Dimensions.get('window');
    const imageSizeClass = width < 400 ? 'w-32 h-32' : 'w-36 h-36';

    const borderClassMap = {
        R1: 'border-r-0.5 border-b-0.5', // Верхняя левая картинка
        R2: 'border-r-0.5 border-b-0.5', // Верхняя правая картинка
        R3: 'border-r-0.5 border-b-0.5', // Средняя левая картинка
        R4: 'border-r-0.5',              // Средняя правая картинка
        L1: 'border-b-0.5',              // Нижняя левая картинка
        L2: 'border-b-0.5',              // Нижняя правая картинка
        L3: 'border-b-0.5',              // Нижняя левая картинка
        L4: ''                          // Нижняя правая картинка
    };

    const getBorderClass = (regionName) => {
        const key = Object.keys(borderClassMap).find(k => regionName.includes(k));
        return borderClassMap[key] || '';
    };

    function handleRegionPress(regionName: string) {
        setSelectedRegion(prevState => prevState === regionName ? '' : regionName)
    }

    function handleDetailsPress() {
        setBottomSheetVisible(true);
    }

    const getEstimationColor = (estimation) => {
        if (estimation <= 70) {
            // Переход от красного к желтому
            const red = 255;
            const green = Math.floor((estimation / 70) * 255);
            return `rgb(${red}, ${green}, 0)`;
        } else {
            // Переход от желтого к зеленому
            const green = 255;
            const red = Math.floor(255 - ((estimation - 70) / 70) * 255);
            return `rgb(${red}, ${green}, 0)`;
        }
    };

    return !regions
        ? <LoadingView/>
        : (
            <View>
                <Text className="text-md text-center text-gray-100 pt-4 pb-2 font-mregular">
                    To check the details, tap on the body region
                </Text>

                <View className="flex flex-row flex-wrap px-4 pt-3">
                    {regions.map((region, index) => (
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
                                    className={`${imageSizeClass} ${selectedRegion && selectedRegion !== region.name ? 'opacity-50' : 'opacity-100'}`}
                                    resizeMode="contain"
                                />
                                {
                                    selectedRegion === region.name
                                        ? (
                                            <TouchableOpacity
                                                onPress={handleDetailsPress}
                                                className={region.name.includes("L") ? "absolute top-10 right-0" : "absolute top-10 left-0"}
                                            >
                                                <Ionicons name='search-circle' size={48}
                                                          color='#FF9001'/>
                                            </TouchableOpacity>

                                        )
                                        : (
                                            <View
                                                className={`absolute ${region.name.includes('R') ? 'top-12 left-0' : 'top-12 right-0'} w-12 h-12 bg-opacity-75 rounded-full flex items-center justify-center`}
                                                style={{
                                                    borderColor: getEstimationColor(region.estimation),
                                                    borderWidth: 1, // Установка ширины границы для применения динамического цвета
                                                }}
                                            >
                                                <Text
                                                    className="text-lg font-cbebas"
                                                    style={{color: getEstimationColor(region.estimation)}}
                                                >
                                                    {region.estimation}%
                                                </Text>
                                            </View>
                                        )
                                }
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        )
}
export default InteractiveDiagram
