import {View, Image, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import {images} from '../../constants'
import PageHeader from "@/components/PageHeader";
import Tabs from "@/components/common/Tabs";
import {Divider, Icon} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import BadgeInfoBox from "@/components/common/BadgeInfoBox";

const ExercisePage = () => {
    const exercise = {
        title: 'Exercises with Jumping Rope',
        thumbnail: images.exerciseBig,
        videoUrl: '',
        level: 'Beginner',
        time: '11 min',
        region: 'Upper Body',
        calories: '90',
        description: 'Great exercise for warming up middle part of the neck and ' +
            'for activating mobility part of the soulders. Perfect choice as a first ' +
            'exercise for working out on a upper body region.',
        instructions: [
            'Lorem Ipsum is simply dummy text of printing Lorem Ipsum is simply dummy text of printing',
            'Lorem Ipsum is simply dummy text of printing',
            'Lorem Ipsum is simply',
            'Lorem Ipsum is simply dummy text of printing Lorem Ipsum is simply',
            'Lorem Ipsum is simply dummy text of printing',
            'Lorem Ipsum is simply dummy text of printing',
        ]
    }

    const tabs = [
        {
            key: 'overview',
            title: 'Overview',
            content: <View className='flex flex-col w-full pt-4 px-4 justify-center items-center'>
                <View name='stats-area' className='flex flex-row justify-center items-center'>
                    <View className='flex flex-row justify-center items-center'>
                        <Icon as={Ionicons} name='flame-outline' size="lg" className='w-6 h-6 text-gray-100'/>
                        <Text className={`text-gray-100 pt-1 pl-2 font-msemibold`}>
                            {exercise.calories} ccal
                        </Text>
                    </View>
                    <Divider orientation='vertical' mx='6'/>
                    <View className='flex flex-row justify-center items-center'>
                        <Icon as={Ionicons} name='timer-outline' size="lg" className='w-6 h-6 text-gray-100'/>
                        <Text className={`text-gray-100 pt-1 pl-2 font-msemibold`}>
                            {exercise.time}
                        </Text>
                    </View>
                </View>
                <View name='regionAndLevel' className='flex flex-row justify-center items-center pt-4'>
                    <BadgeInfoBox title='Region' subtitle={exercise.region}/>
                    <BadgeInfoBox title='Level' subtitle={exercise.level} containerStyles='pl-6'/>
                </View>
                <View name='description' className='flex flex-col justify-center items-center pt-6'>
                    <Text className='text-2xl text-gray-100 font-bebas'>
                        {exercise.title}
                    </Text>
                    <Text className='text-md text-gray-300 font-mregular justify-center items-center pt-1'>
                        {exercise.description}
                    </Text>
                </View>
            </View>
        },
        {
            key: 'instructions',
            title: 'Instructions',
            content: <View className='flex flex-col w-full pt-4 px-4 justify-center items-center'>
                {
                    exercise.instructions.map(instruction => {
                        return (<View key={Math.random()} className='flex flex-row justify-center items-center pt-3'>
                            <Icon as={Ionicons} name='aperture' size="lg" className='w-6 h-6 text-gray-100'/>
                            <Text className='text-md text-gray-300 font-mmedium justify-center items-center pl-2'>
                                {instruction}
                            </Text>
                        </View>)
                    })
                }
            </View>
        }
    ]

    return (
        <SafeAreaView className='bg-primary h-full'>
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
        </SafeAreaView>
    )
}
export default ExercisePage
