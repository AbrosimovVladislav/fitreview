import {View, Text, Image} from 'react-native'
import React from 'react'
import {IconCalendarMonth, IconScaleOutline, IconUser} from "@tabler/icons-react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const SummaryEstimationArea = ({summaryEstimation}) => {

    const getEstimationColor = (estimation) => {
        if (estimation <= 65) {
            // Переход от красного к желтому
            const red = 255;
            const green = Math.floor((estimation / 65) * 255);
            return `rgb(${red}, ${green}, 0)`;
        } else {
            // Переход от желтого к зеленому
            const green = 255;
            const red = Math.floor(255 - ((estimation - 65) / 65) * 255);
            return `rgb(${red}, ${green}, 0)`;
        }
    };

    return (
        <View className='pb-4'>
            <View title='Estimation' className='flex-row pt-4 pb-7 px-3 gap-6'>
                <AnimatedCircularProgress
                    size={90}
                    width={15}
                    fill={summaryEstimation}
                    tintColor={getEstimationColor(summaryEstimation)}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875">
                    {
                        (fill) => (
                            <Text
                                className='text-2xl font-semibold font-cbebas pt-1'
                                style={{ color: getEstimationColor(summaryEstimation) }}
                            >
                                {summaryEstimation} %
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

            <View title='Params Icons' className='flex flex-row items-center px-6'>
                <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                    <IconScaleOutline size={23} color='lime'/>
                    <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                        {85} kg
                    </Text>
                </View>
                <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                    <Text className='text-lgmd text-secondary-100 pt-2 font-msemibold'>
                        BMI
                    </Text>
                    <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                        {24} %
                    </Text>
                </View>
                <View className='flex-1 flex flex-col justify-center items-center border-r border-gray-300'>
                    <IconUser size={23} color='white'/>
                    <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                        {'31 y.o.'}
                    </Text>
                </View>
                <View className='flex-1 flex flex-col justify-center items-center'>
                    <IconCalendarMonth size={23} color='#007AFF'/>
                    <Text className='text-xs text-gray-100 pt-2 font-msemibold'>
                        {'Dec 24'}
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default SummaryEstimationArea
