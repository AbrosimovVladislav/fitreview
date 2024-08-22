import {View, ScrollView, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from '../../constants'
import PageHeader from "@/components/PageHeader";
import Tabs from "@/components/common/Tabs";

const ExercisePage = () => {
    const exercise = {
        title: 'Exercises with Jumping Rope',
        thumbnail: images.exerciseBig,
    }

    const tabs = [
        {
            key: 'overview',
            title: 'Overview',
            content: <View>

            </View>
        },
        {
            key: 'instructions',
            title: 'Instructions',
            content: <View>

            </View>
        }
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full'>
                    <View className='pt-4 justify-center items-center'>
                        <PageHeader title={exercise.title}/>
                    </View>
                    <Image
                        source={exercise.thumbnail}
                        className="max-w-[400px] max-h-[360px] w-screen rounded-xl "
                        resizeMode="cover"
                    />

                    <Tabs tabs={tabs}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ExercisePage
