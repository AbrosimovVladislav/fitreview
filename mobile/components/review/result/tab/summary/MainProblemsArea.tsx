import {View} from 'react-native'
import React from 'react'
import Accordion from "@/components/common/Accordion";
import MainProblemItem from "@/components/review/result/tab/summary/MainProblemItem";

const MainProblemsArea = () => {

    const mainProblems = [
        {
            title: 'Right Hand',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            estimation: 52,
            iconType: 'hand'
        },
        {
            title: 'Right Feet',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            estimation: 36,
            iconType: 'feet'
        },
        {
            title: 'Left Feet',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            estimation: 29,
            iconType: 'feet'
        }
    ]

    return (
        <View>
            <Accordion
                title='Main Problems'
                content={<View className='py-3'>
                    {
                        mainProblems.map(problem => {
                            return <MainProblemItem
                                problem={problem}
                            />
                        })
                    }
                </View>}
            />
        </View>
    )
}
export default MainProblemsArea
