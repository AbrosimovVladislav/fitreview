import {View, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "../../components/common/Button";
import {router} from "expo-router";

const Payment = () => {
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='pt-4'>
                    <PageHeader title='Payment'/>
                    <Button
                        title="Proceed to survey"
                        onPress={() => router.push('/review/survey/multianswer/life-style')}
                        containerStyles="mt-2 mx-6"
                        icon={'ribbon'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Payment
