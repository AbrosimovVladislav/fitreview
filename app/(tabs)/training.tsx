import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import NoTrainingsAvailable from "@/components/training/NoTrainingsAvailable";
import TrainingList from "@/components/training/TrainingList";
import {useGlobalContext} from "@/context/GlobalProvider";
import PageHeader from "@/components/PageHeader";
import {View} from "react-native";

const Training = () => {

    const trainingStatus = true;
    const {user} = useGlobalContext();

    return (
        <SafeAreaView className='bg-primary h-full'>
            {
                trainingStatus &&
                <View className='pt-4'>
                    <PageHeader title="Trainings"/>
                </View>
            }
            {
                trainingStatus
                    ? <TrainingList user={user}/>
                    : <NoTrainingsAvailable/>
            }
        </SafeAreaView>
    )
}
export default Training
