import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

const ExercisePage = () => {

    const {exerciseId} = useLocalSearchParams();

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full min-h-[80vh] justify-center items-center px-4 my-4'>
                    <Text className='text-5xl font-bebas text-gray-300'>Exercise Page</Text>
                    <Text className='text-5xl font-bebas text-gray-300'>{exerciseId}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ExercisePage
