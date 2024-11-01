import {View} from 'react-native'
import React from 'react'
import OtherViewArea from "@/components/review/OtherViewArea";
import {reviewItems} from "@/constants/temp";

const OtherViewsScreen = () => {

    const sideViewRightImage = reviewItems.filter(item => item.name==="SideView-R")[0].userImage
    const sideViewLeftImage = reviewItems.filter(item => item.name==="SideView-L")[0].userImage
    const frontViewRaisedLegRightImage = reviewItems.filter(item => item.name==="FrontView-RaisedLeg-R")[0].userImage
    const frontViewRaisedLegLeftImage = reviewItems.filter(item => item.name==="FrontView-RaisedLeg-L")[0].userImage
    const sideViewRaisedLegRightImage = reviewItems.filter(item => item.name==="SideView-RaisedLeg-R")[0].userImage
    const sideViewRaisedLegLeftImage = reviewItems.filter(item => item.name==="SideView-RaisedLeg-L")[0].userImage


    return (
        <View className='py-4'>
            <OtherViewArea title='Side View' leftImage={sideViewLeftImage} rightImage={sideViewRightImage}/>
            <OtherViewArea title='Raised Leg View'  leftImage={frontViewRaisedLegLeftImage} rightImage={frontViewRaisedLegRightImage}/>
            <OtherViewArea title='Raised Leg Side View'  leftImage={sideViewRaisedLegLeftImage} rightImage={sideViewRaisedLegRightImage}/>
        </View>
    )
}
export default OtherViewsScreen
