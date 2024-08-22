import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Divider, Icon} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {Exercise} from "@/constants/interface";
import {router} from "expo-router";

interface ExerciseItemProps {
    exercise: Exercise
}

const ExerciseItem = ({exercise}: ExerciseItemProps) => {
    const colorVariants = {
        UpperBodyBeginner: 'bg-green-200',
        UpperBodyAmateur: 'bg-emerald-400',
        UpperBodyPro: 'bg-teal-600',
        CoreBeginner: 'bg-indigo-200',
        CoreAmateur: 'bg-violet-400',
        CorePro: 'bg-purple-600',
        HipsBeginner: 'bg-pink-200',
        HipsAmateur: 'bg-rose-400',
        HipsPro: 'bg-red-600',
        FeetBeginner: 'bg-yellow-200',
        FeetAmateur: 'bg-amber-400',
        FeetPro: 'bg-orange-600',
    }

    return (
        <View className='px-4'>
            <TouchableOpacity className='flex flex-row' onPress={() => {
                router.push('/exercise/' + exercise.exerciseId)
            }}>
                <View className={`${colorVariants[exercise.region + exercise.level]} rounded-xl border border-green-400`}>
                    <Image
                        source={{uri: exercise?.shortThumbnail}}
                        className='max-w-[110px] h-[110px] border border-red-200'
                        resizeMode='contain'
                    />
                </View>

                <View className='flex flex-col flex-1 pl-4 gap-1'>
                    <Text className='text-lg text-gray-300 font-msemibold'>{exercise.title}</Text>
                    <View className='flex flex-row'>
                        <Icon as={Ionicons} name='timer-outline' size="sm" color='white'/>
                        <Text className='text-sm text-gray-300 font-mmedium pl-2'>{exercise.time}</Text>
                    </View>
                    <Text className='text-sm text-gray-300 font-mmedium'>{exercise.level}</Text>
                </View>
            </TouchableOpacity>
            <Divider orientation='horizontal' my={6} className='bg-gray-700'/>
        </View>

    )
}
export default ExerciseItem

