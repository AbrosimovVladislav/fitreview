import {View, ScrollView} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {getExercisesBySubcategoryId} from "@/lib/ExerciseService";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/ExerciseList";

const SubcategoryPage = () => {

    const {subcategoryId} = useLocalSearchParams();
    const {data: exercises} = useAppwrite(() => getExercisesBySubcategoryId(subcategoryId));

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title={subcategoryId.replaceAll("-"," ")}/>
            </View>
            <ScrollView>
                <View className='justify-center items-center pt-2'>
                    <ExerciseList exercises={exercises}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SubcategoryPage
