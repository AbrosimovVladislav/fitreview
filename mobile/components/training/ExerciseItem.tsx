import {View, Text, TouchableOpacity, Image} from 'react-native'
import React, {useEffect} from 'react'
import {Ionicons} from "@expo/vector-icons";
import {Exercise} from "@/constants/interface";
import {router} from "expo-router";
import Divider from "@/components/common/Divider";
import {BE} from "@/config";

interface ExerciseItemProps {
    exercise: Exercise
}

const ExerciseItem = ({exercise}: ExerciseItemProps) => {
    const colorVariants = {
        UPPERBODYBEGINNER: 'bg-cyan-200',
        UPPERBODYAMATEUR: 'bg-blue-400',
        UPPERBODYPRO: 'bg-sky-600',
        COREBEGINNER: 'bg-lime-200',
        COREAMATEUR: 'bg-green-400',
        COREPRO: 'bg-emerald-600',
        HIPSBEGINNER: 'bg-orange-200',
        HIPSAMATEUR: 'bg-yellow-400',
        HIPSPRO: 'bg-amber-600',
        FEETBEGINNER: 'bg-pink-200',
        FEETAMATEUR: 'bg-red-400',
        FEETPRO: 'bg-rose-600',
    }

    useEffect(() => {
        console.log(exercise)
    },[exercise])

    return (
        <View className='px-4'>
            <TouchableOpacity className='flex flex-row pb-5' onPress={() => {
                router.push(`/exercise/${BE ? exercise.id : exercise.exerciseId}`);
            }}>
                <View className={`${colorVariants[exercise.region.toUpperCase().replaceAll(" ","")+exercise.level.toUpperCase()]} rounded-xl`}>
                    <Image
                        source={{uri: exercise?.shortThumbnail}}
                        className={`w-24 h-24 max-w-[110px] max-h-[110px]`}
                        resizeMode='contain'
                    />
                </View>

                <View className='flex flex-col flex-1 pl-4 gap-1'>
                    <Text className='text-lg text-gray-300 font-msemibold'>{exercise.title}</Text>
                    <View className='flex flex-row'>
                        <Ionicons name='timer-outline' size={16} color='white'/>
                        <Text className='text-sm text-gray-300 font-mmedium pl-2'>{exercise.time}</Text>
                    </View>
                    <Text className='text-sm text-gray-300 font-mmedium'>{exercise.level}</Text>
                </View>
            </TouchableOpacity>
            <Divider/>
        </View>

    )
}
export default ExerciseItem

