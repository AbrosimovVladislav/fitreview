import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

const LoadingView = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='flex justify-center items-center gap-16 p-4 pt-8'>
                    <View className='flex gap-3 justify-center items-center'>
                        <Text className="text-4xl text-gray-300 text-semibold mt-4 font-cbebas">
                            Loading ...
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LoadingView
