import {ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {SafeAreaView} from "react-native-safe-area-context";

const SportStyle = () => {
    return (
        <SafeAreaView className='bg-primary h-full pt-4'>
            <ScrollView>
                <PageHeader title='SPORT STYLE QUESTIONS'/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SportStyle
