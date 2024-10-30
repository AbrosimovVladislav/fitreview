import {View, ScrollView} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {Training} from "@/constants/interface";
import {getTrainingByIdDeprecated} from "@/lib/ExerciseService";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/training/ExerciseList";
import LoadingView from "@/components/LoadingView";
import {BE} from "@/config";
import {getTrainingById} from "@/service/TrainingService";

const TrainingPage = () => {

    const {slug} = useLocalSearchParams();
    const {data: training} = BE
        ? useAppwrite<Training>(() => getTrainingById(slug))
        : useAppwrite<Training>(() => getTrainingByIdDeprecated(slug))

    if(!training || (BE ? !training.exercises : !training.exerciseId)){
        return <LoadingView/>
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title={training.title}/>
            </View>
            <ScrollView>
                <View className='justify-center items-center pt-2'>
                    <ExerciseList exercises={BE ? training.exercises : training.exerciseId}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default TrainingPage
