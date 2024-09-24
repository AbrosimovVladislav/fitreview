import {View, ScrollView} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {Training} from "@/constants/interface";
import {getTrainingById} from "@/lib/ExerciseService";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/training/ExerciseList";
import LoadingView from "@/components/LoadingView";

const TrainingPage = () => {

    const {slug} = useLocalSearchParams();
    const {data: training} = useAppwrite<Training>(() => getTrainingById(slug));

    if(!training || !training.exerciseId){
        return <LoadingView/>
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title={training.title}/>
            </View>
            <ScrollView>
                <View className='justify-center items-center pt-2'>
                    <ExerciseList exercises={training.exerciseId}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default TrainingPage
