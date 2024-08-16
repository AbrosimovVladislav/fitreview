import {ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Redirect, router} from "expo-router"

import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "@/context/GlobalProvider";

const RootLayout = () => {

    const {isLoading, isLoggedIn} = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href='/home'/>

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    <Text className='text-3xl'>
                        Hello
                    </Text>
                </View>
            </ScrollView>

            <StatusBar
                backgroundColor='#161622'
                style='light'
            />
        </SafeAreaView>
    )
}
export default RootLayout
