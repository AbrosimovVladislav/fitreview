import {ScrollView, View} from 'react-native'
import React from 'react'
import useAppwrite from "@/lib/useAppwrite";
import {getTrainingsByUserId} from "@/lib/ExerciseService";
import {Training} from "@/constants/interface";
import ListItem from "@/components/common/ListItem";

const TrainingList = ({user}) => {

    const {data: trainings} = useAppwrite<Training>(() => getTrainingsByUserId(user.$id));

    return (
        <ScrollView>
                <View className='w-full min-h-[80vh] items-center px-4'>
                    <View className='w-full my-2'>
                        {
                            trainings.map(training => (
                                <ListItem
                                    key={training.title}
                                    title={training.title}
                                    image={training.thumbnail}
                                    description={training.description}
                                    route={"/training/"+ training.$id}
                                />
                            ))
                        }
                    </View>
                </View>
        </ScrollView>
    )
}
export default TrainingList
