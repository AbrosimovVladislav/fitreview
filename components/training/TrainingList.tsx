import {ScrollView, View} from 'react-native'
import React, {useEffect} from 'react'
import PageHeader from "@/components/PageHeader";
import useAppwrite from "@/lib/useAppwrite";
import {getTrainingsByUserId} from "@/lib/ExerciseService";
import {Training} from "@/constants/interface";
import ListItem from "@/components/common/ListItem";

const TrainingList = ({user}) => {

    const {data: trainings} = useAppwrite<Training>(() => getTrainingsByUserId(user.$id));

    useEffect(() => {
        console.log(trainings)
    },[trainings])

    return (
        <ScrollView>
            <View className='pt-4'>
                <PageHeader title="Trainings"/>
                {
                    trainings.map(training => (
                        <ListItem
                            key={training.title}
                            title={training.title}
                            image={training.thumbnail}
                            description={training.description}
                            route={""}
                        />
                    ))
                }

            </View>
        </ScrollView>
    )
}
export default TrainingList
