import React, {useCallback, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import NoTrainingsAvailable from "@/components/training/NoTrainingsAvailable";
import TrainingList from "@/components/training/TrainingList";
import {useGlobalContext} from "@/context/GlobalProvider";
import PageHeader from "@/components/PageHeader";
import {View} from "react-native";
import useAppwrite from "@/lib/useAppwrite";
import {Training as ITraining} from "@/constants/interface";
import {useFocusEffect} from "expo-router";
import {getTrainingsByUserId} from "@/service/TrainingService";

const Training = () => {

    const testUserId = '1';
    const {user} = useGlobalContext();
    const {data: initialTrainings} = useAppwrite<ITraining>(() => getTrainingsByUserId(testUserId));

    const [trainings, setTrainings] = useState<ITraining[]>(initialTrainings || []);

    useFocusEffect(
        useCallback(() => {
            refreshTrainings();
        }, [])
    );

    const refreshTrainings = async () => {
        try {
            const updatedTrainings = await getTrainingsByUserId(testUserId);
            setTrainings(updatedTrainings);
        } catch (error) {
            console.error("[Training_refreshTrainings] Training receiving error:", error);
        }
    };

    return (
        <SafeAreaView className='bg-primary h-full'>
            {
                trainings.length > 0 &&
                <View className='pt-4'>
                    <PageHeader title="Trainings"/>
                </View>
            }
            {
                trainings.length > 0
                    ? <TrainingList trainings={trainings}/>
                    : <NoTrainingsAvailable/>
            }
        </SafeAreaView>
    )
}
export default Training
