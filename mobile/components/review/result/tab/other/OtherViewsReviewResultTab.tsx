import {ScrollView, View} from 'react-native'
import React from 'react'
import OtherViewArea from "@/components/review/result/tab/other/OtherViewArea";
import {bodyMapRegions} from "@/constants/temp";

const OtherViewsReviewResultTab = () => {

    const sideViewRightImage = bodyMapRegions.filter(item => item.name==="SideView-R")[0].userImage
    const sideViewLeftImage = bodyMapRegions.filter(item => item.name==="SideView-L")[0].userImage
    const frontViewRaisedLegRightImage = bodyMapRegions.filter(item => item.name==="FrontView-RaisedLeg-R")[0].userImage
    const frontViewRaisedLegLeftImage = bodyMapRegions.filter(item => item.name==="FrontView-RaisedLeg-L")[0].userImage
    const sideViewRaisedLegRightImage = bodyMapRegions.filter(item => item.name==="SideView-RaisedLeg-R")[0].userImage
    const sideViewRaisedLegLeftImage = bodyMapRegions.filter(item => item.name==="SideView-RaisedLeg-L")[0].userImage


    return (
        <ScrollView className='py-4'>
            <OtherViewArea title='Side View' leftImage={sideViewLeftImage} rightImage={sideViewRightImage}/>
            <OtherViewArea title='Raised Leg View'  leftImage={frontViewRaisedLegLeftImage} rightImage={frontViewRaisedLegRightImage}/>
            <OtherViewArea title='Raised Leg Side View'  leftImage={sideViewRaisedLegLeftImage} rightImage={sideViewRaisedLegRightImage}/>
        </ScrollView>
    )
}
export default OtherViewsReviewResultTab
