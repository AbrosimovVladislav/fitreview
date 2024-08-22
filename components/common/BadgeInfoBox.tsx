import {View, Text} from 'react-native'
import React from 'react'

const BadgeInfoBox = ({title, subtitle, containerStyles}) => {
    return (
        <View className={containerStyles}>
            <Text className={`text-gray-100 text-md text-center font-mregular`}>
                {title}
            </Text>
            <View className=' bg-secondary-dark py-2 px-3 mt-1 rounded-lg'>
                <Text className='text-sm text-gray-100 text-center font-mbold'>
                    {subtitle}
                </Text>
            </View>
        </View>
    )
}
export default BadgeInfoBox
