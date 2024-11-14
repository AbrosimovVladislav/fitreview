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
import {IconHandStop} from "@tabler/icons-react-native/dist/esm/tabler-icons-react-native";
import {getEstimationColor} from "@/service/GradientColorService";


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

                <View className='flex flex-col justify-center items-center pt-6 gap-2 px-3'>
                    <Text className='text-2xl text-gray-100 font-cbebas'>
                        {exercise.title}
                    </Text>
                    <Text className='text-lg text-gray-300 font-mregular text-center justify-center items-center pt-1'>
                        {exercise.description}
                    </Text>
                </View>
            </View>
        },
        {
            key: 'instructions',
            title: 'Instructions',
            content: <View className='flex flex-col w-full pt-6 pl-3 pr-6 '>
                <View className='flex-row justify-center gap-3'>
                    <Text className='text-2xl text-secondary-100 text-center font-cbebas'>
                        {exercise.title}
                    </Text>
                    <Text className='text-2xl text-gray-100 text-center font-cbebas'>
                        step by step
                    </Text>
                </View>
                {
                    exercise?.instructions?.map((instruction, index) => {
                        return (<View key={index} className='flex flex-row pt-5 pl-2 pr-5 gap-1'>
                            <View
                                className='w-8 h-8 bg-opacity-75 rounded-full flex items-center justify-center'
                                style={{
                                    borderColor: '#FF9C0196',
                                    borderWidth: 1,
                                }}
                            >
                                <Text className='text-md text-secondary-100 font-cbebas'>
                                    {index + 1}
                                </Text>
                            </View>
                            <Text className='text-md text-gray-300 font-mmedium pl-2'>
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
