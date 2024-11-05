import {View} from 'react-native'
import React from 'react'
import Accordion from "@/components/common/Accordion";
import EstimationLabel from "@/components/review/result/interactive-body-map/EstimationLabel";
import {getEstimationColor} from "@/service/GradientColorService";
import InfoCard from "@/components/common/InfoCard";

const MainProblemsArea = ({getIconByType}) => {

    const mainProblems = [
        {
            title: 'Right Hand & Shoudler',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            estimation: 67,
            iconType: 'hand'
        },
        {
            title: 'Chest Muscles',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            estimation: 47,
            iconType: 'upper-body'
        },
        {
            title: 'Core Area',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            estimation: 54,
            iconType: 'core'
        }
    ]

    return (
        <View>
            <Accordion
                title='Main Problems'
                content={<View className='py-3'>
                    {
                        mainProblems.map((problem, index) => {
                            return <InfoCard
                                key={index}
                                title={problem.title}
                                description={problem.description}
                                icon1={<EstimationLabel
                                    regionName="undefined"
                                    regionEstimation={problem.estimation}
                                    size="md"
                                />}
                                icon2={
                                    <View
                                        className="absolute top-7 w-10 h-10 rounded-full flex items-center justify-center mt-1"
                                        style={{
                                            backgroundColor: getEstimationColor(problem.estimation),
                                        }}>
                                        {getIconByType(problem.iconType)}
                                    </View>
                                }
                            />
                        })
                    }
                </View>}
            />
        </View>
    )
}
export default MainProblemsArea
