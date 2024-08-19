import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeTopArea from "@/components/HomeTopArea";
import HomeBannerArea from "@/components/HomeBannerArea";
import HomeCategories from "@/components/HomeCategories";

const Home = () => {

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full min-h-[80vh] justify-center items-center px-4 my-4'>
                    <HomeTopArea/>
                    <HomeBannerArea/>
                    <HomeCategories/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home
