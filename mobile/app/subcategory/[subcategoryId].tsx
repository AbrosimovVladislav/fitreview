import {View, ScrollView} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/training/ExerciseList";

const SubcategoryPage = () => {

    const {subcategoryId} = useLocalSearchParams();

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title={subcategoryId.replaceAll("-", " ")}/>
            </View>
            <ScrollView>
                <View className='justify-center items-center pt-2'>
                    <ExerciseList searchId={subcategoryId} idType='subcategoryId'/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SubcategoryPage
