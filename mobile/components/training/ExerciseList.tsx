import {View} from 'react-native'
import React from 'react'
import ExerciseItem from "@/components/training/ExerciseItem";
import {Exercise} from "@/constants/interface";
import useAppwrite from "@/lib/useAppwrite";
import {
    getExercisesBySubcategoryId,
    getExercisesByTrainingId,
} from "@/service/TrainingService";

interface ExerciseListProps {
    searchId: any,
    idType: string
}


const ExerciseList = ({searchId, idType}: ExerciseListProps) => {

    const {data: exercises} = useAppwrite<Exercise>(() => {
        switch (idType) {
            case 'subcategoryId':
                return getExercisesBySubcategoryId(searchId);
            default:
                return getExercisesByTrainingId(searchId);
        }
    });

    return (
        <View className='w-full'>
            {exercises.map((exercise, index) => (
                <ExerciseItem key={index} exercise={exercise}/>
            ))}
        </View>
    )
}
export default ExerciseList

