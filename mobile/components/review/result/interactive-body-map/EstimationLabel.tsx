import {View, Text} from 'react-native'
import React from 'react'

const EstimationLabel = ({regionName, regionEstimation}) => {

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

    return (
        <View
            className={`absolute ${regionName.includes('L') ? 'top-12 left-0' : 'top-12 right-0'} w-12 h-12 bg-opacity-75 rounded-full flex items-center justify-center`}
            style={{
                borderColor: getEstimationColor(regionEstimation),
                borderWidth: 1, // Установка ширины границы для применения динамического цвета
            }}
        >
            <Text
                className="text-lg font-cbebas"
                style={{color: getEstimationColor(regionEstimation)}}
            >
                {regionEstimation}%
            </Text>
        </View>
    )
}
export default EstimationLabel
