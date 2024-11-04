import {TouchableOpacity, Image, View} from 'react-native'
import React from 'react'
import DetailsButton from "@/components/review/result/interactive-body-map/DetailsButton";
import EstimationLabel from "@/components/review/result/interactive-body-map/EstimationLabel";

const TouchableRegion = ({
                             index,
                             region,
                             selectedRegion,
                             setSelectedRegion,
                             setBottomSheetVisible,
                             summary,
                             screenWidth
                         }) => {

    const borderClassMap = {
        L1: 'border-r-0.5 border-b-0.5',
        L2: 'border-r-0.5 border-b-0.5',
        L3: 'border-r-0.5 border-b-0.5',
        L4: 'border-r-0.5',
        R1: 'border-b-0.5',
        R2: 'border-b-0.5',
        R3: 'border-b-0.5',
        R4: ''
    };

    const imageSizeClass = screenWidth < 400
        ? (summary ? 'w-28 h-28' : 'w-32 h-32')
        : (summary ? 'w-32 h-32' : 'w-36 h-36');

    const getBorderClass = (regionName) => {
        const key = Object.keys(borderClassMap).find(k => regionName.includes(k));
        return borderClassMap[key] || '';
    };

    function handleItemPress(regionName: string) {
        setSelectedRegion(prevState => prevState === regionName ? '' : regionName)
    }

    return (
        <View key={index}
              className={`flex w-1/2 ${region.name.includes('L') ? 'items-end' : 'items-start'}`}>
            <TouchableOpacity
                onPress={() => handleItemPress(region.name)}
                className={`flex items-start ${getBorderClass(region.name)} border-orange-300`}
            >
                <Image
                    source={{uri: selectedRegion === region.name ? region.diagramImage : region.userImage}}
                    className={`${imageSizeClass} ${selectedRegion && selectedRegion !== region.name ? 'opacity-50' : 'opacity-100'}`}
                    resizeMode="contain"
                />
                {
                    selectedRegion === region.name
                        ? <DetailsButton
                            regionName={region.name}
                            setBottomSheetVisible={setBottomSheetVisible}/>
                        : summary && <View
                        className={`absolute ${region.name.includes('L') ? 'top-10 left-0' : 'top-10 right-0'} `}>
                        <EstimationLabel
                            regionName={region.name}
                            regionEstimation={region.estimation}
                            size={screenWidth < 400 ? 'md' : 'lg'}/>
                    </View>

                }
            </TouchableOpacity>
        </View>
    )
}
export default TouchableRegion
