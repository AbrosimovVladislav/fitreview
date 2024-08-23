import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {SafeAreaView} from "react-native-safe-area-context";

const Payment = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='pt-4'>
                    <PageHeader title='Payment'/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Payment
