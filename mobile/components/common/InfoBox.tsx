import {View, Text} from 'react-native'
import React from 'react'

const InfoBox = ({title, subtitle, containerStyles}) => {
    return (
        <View className={containerStyles}>
            <Text className={`text-gray-300 text-center font-msemibold`}>
                {title}
            </Text>
            <Text className={'text-sm text-gray-100 text-center font-mregular'}>
                {subtitle}
            </Text>
        </View>
    )
}
export default InfoBox
