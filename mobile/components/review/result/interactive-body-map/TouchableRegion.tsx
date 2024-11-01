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
                             imageSizeClass
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
                        : summary && <EstimationLabel
                        regionName={region.name}
                        regionEstimation={region.estimation}/>
                }
            </TouchableOpacity>
        </View>
    )
}
export default TouchableRegion
