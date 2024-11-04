import {View, Text} from 'react-native'
import React from 'react'
import {getEstimationColor} from "@/service/GradientColorService";

const EstimationLabel = ({regionEstimation, size}) => {

    return (
        <View
            className={`${size === 'md' ? 'w-10 h-10' : 'w-12 h-12'}  bg-opacity-75 rounded-full flex items-center justify-center`}
            style={{
                borderColor: getEstimationColor(regionEstimation),
                borderWidth: 1,
            }}
        >
            <Text
                className={`${size === 'md' ? 'text-md' : 'text-lg'} font-cbebas`}
                style={{color: getEstimationColor(regionEstimation)}}
            >
                {regionEstimation}%
            </Text>
        </View>
    )
}
export default EstimationLabel
