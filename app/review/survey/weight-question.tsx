import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import NextQuestionButton from "@/components/NextQuestionButton";

const AgeQuestion = () => {

    const preSubmitAction = () =>{

    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='pt-4'>
                    <PageHeader/>
                    <View name='question-header' className='pt-2 px-4'>
                        <Text className='text-md text-gray-300 font-mmedium'>
                            Step 6 of 7
                        </Text>
                        <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                            How much do you weight ?
                        </Text>
                        <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        </Text>
                    </View>
                    <NextQuestionButton
                        path={'/review/survey/estimation-photo-question'}
                        preSubmitAction={preSubmitAction}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AgeQuestion
