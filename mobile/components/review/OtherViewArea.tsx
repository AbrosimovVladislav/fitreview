import {View, Text, Image} from 'react-native'
import React from 'react'

const OtherViewArea = ({title}) => {
    return (
        <View className='flex items-center pb-8'>
            <Text className="text-3xl text-gray-300 text-semibold font-cbebas">
                {title}
            </Text>
            <View className='flex flex-row gap-4'>
                <Image
                    source={{uri: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/670a3f4600184a31918f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin'}}
                    className="w-44 h-84"
                    resizeMode="contain"
                />
                <Image
                    source={{uri: 'https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/670a3f4600184a31918f/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314&mode=admin'}}
                    className="w-44 h-96"
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
