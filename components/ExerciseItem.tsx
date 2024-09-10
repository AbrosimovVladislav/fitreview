import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {Exercise} from "@/constants/interface";
import {router} from "expo-router";
import Divider from "@/components/common/Divider";

interface ExerciseItemProps {
    exercise: Exercise
}

const ExerciseItem = ({exercise}: ExerciseItemProps) => {
    const colorVariants = {
        UpperBodyBeginner: 'bg-cyan-200',
        UpperBodyAmateur: 'bg-blue-400',
        UpperBodyPro: 'bg-sky-600',
        CoreBeginner: 'bg-lime-200',
        CoreAmateur: 'bg-green-400',
        CorePro: 'bg-emerald-600',
        HipsBeginner: 'bg-orange-200',
        HipsAmateur: 'bg-yellow-400',
        HipsPro: 'bg-amber-600',
        FeetBeginner: 'bg-pink-200',
        FeetAmateur: 'bg-red-400',
        FeetPro: 'bg-rose-600',
    }

    return (
        <View className='px-4'>
            <TouchableOpacity className='flex flex-row pb-5' onPress={() => {
                router.push('/exercise/' + exercise.exerciseId)
            }}>
                <View className={`${colorVariants[exercise.region.replaceAll(" ","")+exercise.level]} rounded-xl`}>
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

