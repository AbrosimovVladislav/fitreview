import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

const UpperBody = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full min-h-[80vh] justify-center items-center px-4 my-4'>
                    <Text className='text-5xl font-bebas text-gray-300'>
                        UpperBody
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default UpperBody
