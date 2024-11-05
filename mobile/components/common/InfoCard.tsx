import {View, Text} from 'react-native'
import React from 'react'

const InfoCard = ({title, description, icon1, icon2}) => {
    return (
        <View className="flex-row items-center gap-5 px-2 py-4">
            <View className={`flex items-center justify-center ${icon2 && 'pb-6'}`}>
                {icon1 && icon1}
                {icon2 && icon2}
            </View>

            <View className="flex-1">
                <Text className="text-xl text-white font-semibold font-cbebas">
                    {title}
                </Text>
                <Text className="text-sm text-gray-100 font-mregular pt-1">
                    {description}
                </Text>
            </View>
        </View>
    )
}
export default InfoCard
