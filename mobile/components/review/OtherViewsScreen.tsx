import {View} from 'react-native'
import React from 'react'
import OtherViewArea from "@/components/review/OtherViewArea";

const OtherViewsScreen = () => {
    return (
        <View className='py-4'>
            <OtherViewArea title='Side View'/>
            <OtherViewArea title='Raised Leg View'/>
            <OtherViewArea title='Raised Leg Side View'/>
        </View>
    )
}
export default OtherViewsScreen
