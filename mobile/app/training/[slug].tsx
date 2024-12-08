import {View, ScrollView} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {Training} from "@/constants/interface";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/training/ExerciseList";
import LoadingView from "@/components/LoadingView";
import {getTrainingById} from "@/service/TrainingService";

const TrainingPage = () => {

    const {slug} = useLocalSearchParams();
    const {data: training} = useAppwrite<Training>(() => getTrainingById(slug));

    if (!training) {
        return <LoadingView/>
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title={training.title}/>
            </View>
            <ScrollView>
                <View className='justify-center items-center pt-2'>
                    <ExerciseList searchId={slug} idType='trainingId'/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default TrainingPage
