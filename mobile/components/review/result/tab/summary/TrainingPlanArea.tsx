import {View} from 'react-native'
import React from 'react'
import Accordion from "@/components/common/Accordion";
import InfoCard from "@/components/common/InfoCard";
import {getRandomColor} from "@/service/GradientColorService";
import Button from "@/components/common/Button";
import {router} from "expo-router";

const TrainingPlanArea = ({getIconByType}) => {

    const trainings = [
        {
            title: 'UpperBody MFR + Activation',
            description: 'Training oriented to warming up and stretching of upper body region muscles',
            iconType: 'hand'
        },
        {
            title: 'Right Feet Stretching',
            description: 'Training oriented to warming up and stretching of upper body region muscles the recommendations',
            iconType: 'feet'
        },
        {
            title: 'Feet Varus Fix',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            iconType: 'feet'
        }
    ]

    const onToTrainingPlanPress = async () => {
        router.push('/training')
    }

    return (
        <View>
            <Accordion
                title='Training Objective'
                content={<View className='py-3'>
                    {
                        trainings.map(training => {
                            return <InfoCard
                                title={training.title}
                                description={training.description}
                                icon1={<View
                                    className="w-10 h-10 rounded-full flex items-center justify-center mt-1"
                                    style={{
                                        backgroundColor: getRandomColor(),
                                    }}>
                                    {getIconByType(training.iconType)}
                                </View>}
                            />
                        })
                    }
                    <View className='pt-2 px-2'>
                        <Button
                            title="To Personal Trainings"
                            onPress={onToTrainingPlanPress}
                            containerStyles="bg-transparent border border-gray-100 rounded-xl min-h-[48px]"
                            textStyles="text-gray-300"
                        />
                    </View>
                </View>}
            />
        </View>
    )
}
export default TrainingPlanArea
