import {View, Image, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import {icons} from '../../constants'
import PageHeader from "@/components/PageHeader";
import Tabs from "@/components/common/Tabs";
import {Ionicons} from "@expo/vector-icons";
import YoutubePlayer from 'react-native-youtube-iframe';
import {useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {Exercise} from "@/constants/interface";
import {getExerciseById} from "@/service/TrainingService";
import {getExerciseByIdDeprecated} from "@/lib/ExerciseService";
import {BE} from "@/config"


const ExercisePage = () => {

    const [play, setPlay] = useState(false);

    const {exerciseId} = useLocalSearchParams();
    const {data: exercise} = BE
        ? useAppwrite<Exercise>(() => getExerciseById(Number(exerciseId)))
        : useAppwrite<Exercise>(() => getExerciseByIdDeprecated(Number(exerciseId)));

    const tabs = [
        {
            key: 'overview',
            title: 'Overview',
            content: <View className='flex flex-col w-full pt-6 px-4 justify-center items-center'>
                <View className='flex flex-row items-center'>
                    <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                        <Ionicons name='flame-outline' size={22} color='#FF9001'/>
                        <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                            {exercise.complexity}
                        </Text>
                    </View>
                    <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                        <Ionicons name='timer-outline' size={22} color='lime'/>
                        <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                            {exercise.time} min
                        </Text>
                    </View>
                    <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                        <Ionicons name='barbell-outline' size={22} color='white'/>
                        <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                            {exercise.level}
                        </Text>
                    </View>
                    <View className='flex-1 flex flex-col justify-center items-center'>
                        <Ionicons name='person-outline' size={22} color='cyan'/>
                        <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                            {exercise.region}
                        </Text>
                    </View>
                </View>

                <View className='flex flex-col justify-center items-center pt-6'>
                    <Text className='text-2xl text-gray-100 font-cbebas'>
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
            content: <View className='flex flex-col w-full pt-6 px-4 justify-center items-center'>
                {
                    exercise?.instructions?.map(instruction => {
                        return (<View key={Math.random()} className='flex flex-row justify-center items-center pt-3'>
                            <Ionicons name='aperture' size={22} color='white'/>
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
            <View className='flex flex-col w-full flex-1'>
                <View className='pt-4 justify-center items-center'>
                    <PageHeader title={exercise.title}/>
                </View>
                {
                    play
                        ? (
                            <View className='flex justify-center'>
                                <YoutubePlayer
                                    height={240}
                                    play={play}
                                    videoId={exercise.youtubeVideoId} // Замените на нужный ID видео
                                />
                            </View>
                        )
                        : (
                            <TouchableOpacity
                                className='flex-1 max-h-[240px] justify-center items-center'
                                activeOpacity={0.7}
                                onPress={() => setPlay(true)}>
                                <Image
                                    source={{uri: exercise?.thumbnail}}
                                    className="w-96 h-60 max-w-[400px] max-h-[240px] w-screen rounded-xl"
                                    resizeMode="cover"
                                />
                                <Image
                                    source={icons.play}
                                    className='w-16 h-16 absolute'
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        )
                }
                <Tabs tabs={tabs}/>
            </View>
        </SafeAreaView>
    )
}
export default ExercisePage
