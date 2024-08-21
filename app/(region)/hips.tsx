import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from '../../constants'
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/ExerciseList";

const Hips = () => {

    //TODO get from database
    const exercises = [
        {
            exerciseId: '16',
            title: 'Exercises with Jumping Cope 1',
            level: 'Beginner',
            time: '11 min',
            region: 'Hips',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '17',
            title: 'Exercises with Jumping Nope 2',
            level: 'Beginner',
            time: '12 min',
            region: 'Hips',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '18',
            title: 'Exercises with Jumping Pope 3',
            level: 'Amateur',
            time: '13 min',
            region: 'Hips',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '19',
            title: 'Exercises with Jumping Rope 4',
            level: 'Pro',
            time: '14 min',
            region: 'Hips',
            
            imageUrl: images.exercise
        },
        {
            exerciseId: '20',
            title: 'Exercises with Jumping Vope 5',
            level: 'Pro',
            time: '11 min',
            region: 'Hips',
            
            imageUrl: images.exercise
        }
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='justify-center items-center pt-4'>
                    <PageHeader title='Hips Region'/>
                    <ExerciseList exercises={exercises}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Hips
