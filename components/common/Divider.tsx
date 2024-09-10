import {View, Text} from 'react-native'
import React from 'react'

const Divider = ({vertical}) => {
    return (
        vertical
            ? <View className="h-10 bg-gray-700 w-[2px] mx-5"/>
            : <View className="h-[1px] bg-gray-700 w-full mb-6"/>
    )

}
export default Divider
      