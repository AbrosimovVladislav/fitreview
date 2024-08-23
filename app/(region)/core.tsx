import {View, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import ExerciseList from "@/components/ExerciseList";

import {images} from '../../constants'
import useAppwrite from "@/lib/useAppwrite";
import {getExercisesByRegion} from "@/lib/appwrite";

const Core = () => {

    const {data: exercises} = useAppwrite(() => getExercisesByRegion('Core'));

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
