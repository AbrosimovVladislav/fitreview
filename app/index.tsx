import {Image, ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {Redirect, router} from "expo-router"

import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "@/context/GlobalProvider";

import {images} from '../constants'
import Button from "@/components/Button";

const RootLayout = () => {

    const {isLoading, isLoggedIn} = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href='/home'/>

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[320px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5">
                        <Text className="text-5xl text-secondary-200 font-bebas text-center ">Fit Review</Text>
                    </View>

                    <Text className="text-md font-mregular text-gray-100 mt-7 text-center">
                        Analyze, Make a Plan, Fix Your Problems
                    </Text>
                    <Button
                        title="Let's Start"
                        onPress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"/>
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
