import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/ExerciseList";

import {images} from '../../constants'

const Core = () => {

    //TODO get from database
    const exercises = [
        {
            exerciseId: '6',
            title: 'Exercises with Jumping Cope 1',
            level: 'Beginner',
            time: '11 min',
            region: 'Core',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '7',
            title: 'Exercises with Jumping Nope 2',
            level: 'Beginner',
            time: '12 min',
            region: 'Core',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '8',
            title: 'Exercises with Jumping Pope 3',
            level: 'Amateur',
            time: '13 min',
            region: 'Core',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '9',
            title: 'Exercises with Jumping Rope 4',
            level: 'Pro',
            time: '14 min',
            region: 'Core',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '10',
            title: 'Exercises with Jumping Vope 5',
            level: 'Pro',
            time: '11 min',
            region: 'Core',
            
            imageUrl: images.exercise
        }
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
            <View className='pt-4'>
                <PageHeader title='Core Region'/>
            </View>
            <ScrollView>
                <View className='justify-center items-center pt-2'>
                    <ExerciseList exercises={exercises}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Core
