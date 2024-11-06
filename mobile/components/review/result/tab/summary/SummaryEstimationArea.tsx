import {View, Text} from 'react-native'
import React from 'react'
import {IconCalendarMonth, IconScaleOutline, IconUser} from "@tabler/icons-react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {getEstimationColor} from "@/service/GradientColorService";


const SummaryEstimationArea = ({summaryData}) => {

    return (
        <View className='pb-4'>
            <View className='flex-row pt-4 pb-7 gap-6'>
                <AnimatedCircularProgress
                    size={90}
                    width={15}
                    fill={summaryData.estimation}
                    tintColor={getEstimationColor(summaryData.estimation)}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875">
                    {
                        () => (
                            <Text
                                className='text-2xl font-semibold font-cbebas pt-1'
                                style={{ color: getEstimationColor(summaryData.estimation) }}
                            >
                                {summaryData.estimation} %
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <View title='Estimation text' className='flex-1'>
                    <Text className='text-3xl text-gray-300 text-semibold font-cbebas'>
                        Summary
                    </Text>
                    <Text className='text-sm text-gray-100 font-mregular'>
                        An overall functional evaluation, summarizing your trainer’s assessment of each body region
                    </Text>
                </View>
            </View>

            <View title='Params Icons' className='flex flex-row items-center'>
                <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                    <IconScaleOutline size={25} color='#34C759'/>
                    <Text className='text-md text-gray-100 pt-2 font-msemibold'>
                        {summaryData.weight} kg
                    </Text>
                </View>
                <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                    <Text className='text-xl text-secondary-100 font-msemibold'>
                        BMI
                    </Text>
                    <Text className='text-md text-gray-100 pt-2 font-msemibold'>
                        {summaryData.fatIndex}%
                    </Text>
                </View>
                <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                    <IconUser size={25} color='white'/>
                    <Text className='text-md text-gray-100 pt-2 font-msemibold'>
                        {summaryData.age + ' y.o.'}
                    </Text>
                </View>
                <View className='flex-1 flex flex-col justify-center items-center'>
                    <IconCalendarMonth size={25} color='#007AFF'/>
                    <Text className='text-md text-gray-100 pt-2 font-msemibold'>
                        {summaryData.date}
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default SummaryEstimationArea
