import {View} from 'react-native'
import React from 'react'
import Accordion from "@/components/common/Accordion";
import InfoCard from "@/components/common/InfoCard";
import {getRandomColor} from "@/service/GradientColorService";

const RecommendationsArea = ({getIconByType, recommendations}) => {

    return (
        <View>
            <Accordion
                title='Recommendations'
                initCollapsed={true}
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
