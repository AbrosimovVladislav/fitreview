import {ScrollView, View} from 'react-native'
import React from 'react'
import ListItem from "@/components/common/ListItem";
import {BE} from "@/config";

const TrainingList = ({trainings}) => {

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
                                route={`/training/${BE ? 1 : training.$id}`}
                            />
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
}
export default TrainingList
