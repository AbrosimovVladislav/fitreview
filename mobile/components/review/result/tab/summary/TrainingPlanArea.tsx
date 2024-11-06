import {View} from 'react-native'
import React from 'react'
import Accordion from "@/components/common/Accordion";
import InfoCard from "@/components/common/InfoCard";
import {getRandomColor} from "@/service/GradientColorService";
import Button from "@/components/common/Button";
import {router} from "expo-router";

const TrainingPlanArea = ({getIconByType, trainingObjective}) => {

    const onToTrainingPlanPress = async () => {
        router.push('/training')
    }

    return (
        <View>
            <Accordion
                title='Training Objective'
                initCollapsed={true}
                content={<View className='py-3'>
                    {
                        trainingObjective.map((training,index) => {
                            return <InfoCard
                                key={index}
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
