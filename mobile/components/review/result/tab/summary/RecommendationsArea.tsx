import {View} from 'react-native'
import React from 'react'
import Accordion from "@/components/common/Accordion";
import InfoCard from "@/components/common/InfoCard";
import {getRandomColor} from "@/service/GradientColorService";

const RecommendationsArea = ({getIconByType}) => {

    const recommendations = [
        {
            title: 'Lower stress at work',
            description: 'Training oriented to warming up and stretching of upper body region muscles',
            iconType: 'stress'
        },
        {
            title: 'Stop your diet',
            description: 'Training oriented to warming up and stretching of upper body region muscles the recommendations',
            iconType: 'food'
        },
        {
            title: 'Sleep more than now',
            description: 'To see the recommendations, just tap on the body region or run a step-by-step body reviewTo see the recommendations',
            iconType: 'sleep'
        }
    ]

    return (
        <View>
            <Accordion
                title='Recommendations'
                content={<View className='py-3'>
                    {
                        recommendations.map((recommendation, index) => {
                            return <InfoCard
                                key={index}
                                title={recommendation.title}
                                description={recommendation.description}
                                icon1={<View
                                    className="w-10 h-10 rounded-full flex items-center justify-center mt-1"
                                    style={{
                                        backgroundColor: getRandomColor(),
                                    }}>
                                    {getIconByType(recommendation.iconType)}
                                </View>}
                            />
                        })
                    }
                </View>}
            />
        </View>
    )
}
export default RecommendationsArea
