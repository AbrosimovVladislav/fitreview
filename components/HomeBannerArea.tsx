import {View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import {images} from '../constants'
import {router} from "expo-router";

const HomeBannerArea = () => {
    return (
        <View className='pb-4'>
            <TouchableOpacity
                onPress={() => router.push('/review')}
            >
                <Image
                    source={images.bannerGetFitReview}
                    className='max-w-[360px] h-[270px] '
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}
export default HomeBannerArea
