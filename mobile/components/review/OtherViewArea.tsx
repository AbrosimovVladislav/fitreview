import {View, Text, Image} from 'react-native'
import React from 'react'

const OtherViewArea = ({title, leftImage, rightImage}) => {
    return (
        <View className='flex items-center pb-8'>
            <Text className="text-3xl text-gray-300 text-semibold font-cbebas">
                {title}
            </Text>
            <View className='flex flex-row gap-4'>
                <Image
                    source={{uri: leftImage}}
                    className="w-44 h-96 border border-red-300"
                    resizeMode="contain"
                />
                <Image
                    source={{uri: rightImage}}
                    className="w-44 h-96 border border-orange-300"
                    resizeMode="contain"
                />
            </View>

            <Text className="text-md text-center text-gray-100 pt-3 font-mregular">
                Warming up your glutes is essential for enhancing movement efficiency,
                preventing injuries
            </Text>
            <Text className="text-md text-center text-gray-100 pt-3 font-mregular">
                Warming up your glutes is essential for enhancing movement efficiency,
                preventing injuries
            </Text>
            <Text className="text-md text-center text-gray-100 pt-3 font-mregular">
                Warming up your glutes is essential for enhancing movement efficiency,
                preventing injuries
            </Text>
        </View>
    )
}
export default OtherViewArea
