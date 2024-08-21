import {View, Text} from 'react-native'
import React from 'react'
import ExerciseItem from "@/components/ExerciseItem";
import {Exercise} from "@/constants/interface";

interface ExerciseListProps {
    exercises: Exercise[]
}


const ExerciseList = ({exercises}: ExerciseListProps) => {
    return (
        <View className='w-full'>
            {exercises.map((exercise) => (
                <ExerciseItem exercise={exercise}/>
            ))}
        </View>
    )
}
export default ExerciseList

