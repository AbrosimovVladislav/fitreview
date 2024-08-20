import {View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

import {images} from '../constants'
import {router} from "expo-router";

const HomeBannerArea = () => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => router.push('/review')}
            >
                <Image
                    source={images.firstPageBanner}
                    className='max-w-[390px] h-[300px]'
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}
export default HomeBannerArea
