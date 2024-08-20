import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import HomeTopArea from "@/components/HomeTopArea";
import HomeBannerArea from "@/components/HomeBannerArea";
import HomeCategories from "@/components/HomeCategories";
import {Divider} from "native-base";

const Home = () => {

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full min-h-[80vh] items-center px-4 my-6'>
                    <HomeTopArea/>
                    <HomeBannerArea/>
                    <Divider orientation='horizontal' mb={6} className='bg-gray-700' />
                    <HomeCategories/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home
