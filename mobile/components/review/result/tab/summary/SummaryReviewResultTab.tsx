import {ScrollView} from 'react-native'
import React from 'react'
import InteractiveBodyMap from "@/components/review/result/interactive-body-map/InteractiveBodyMap";
import SummaryEstimationArea from "@/components/review/result/tab/summary/SummaryEstimationArea";
import MainProblemsArea from "@/components/review/result/tab/summary/MainProblemsArea";
import Divider from "@/components/common/Divider";
import TrainingPlanArea from "@/components/review/result/tab/summary/TrainingPlanArea";
import {IconHandStop, IconMan, IconShoe} from "@tabler/icons-react-native/dist/esm/tabler-icons-react-native";
import RecommendationsArea from "@/components/review/result/tab/summary/RecommendationsArea";
import {IconBed, IconDatabase, IconMeat, IconMoodNervous, IconShirt} from "@tabler/icons-react-native";

const SummaryReviewResultTab = ({
                                    userData,
                                    reviewDate,
                                    estimation,
                                    problems,
                                    trainingObjectives,
                                    generalRecommendations,
                                    bodyMapRegions,
                                    selectedRegion,
                                    setSelectedRegion,
                                    setBottomSheetVisible
                                }) => {

    const getIconByType = (iconType) => {
        switch (iconType) {
            case 'hand':
                return <IconHandStop size={25} color='black'/>;
            case 'feet':
                return <IconShoe size={25} color='black'/>;
            case 'stress':
                return <IconMoodNervous size={25} color='black'/>;
            case 'food':
                return <IconMeat size={25} color='black'/>;
            case 'sleep':
                return <IconBed size={25} color='black'/>;
            case 'upper-body':
                return <IconShirt size={25} color='black'/>;
            case 'core':
                return <IconDatabase size={25} color='black'/>;
            default:
                return <IconMan size={25} color='black'/>;
        }
    };

    return (
        <ScrollView className='px-4'>
            <InteractiveBodyMap
                bodyMapRegions={bodyMapRegions}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                setBottomSheetVisible={setBottomSheetVisible}
                summary
            />
            <SummaryEstimationArea
                userData={userData}
                estimation={estimation}
                reviewDate={reviewDate}
            />
            <Divider/>

            <MainProblemsArea
                getIconByType={getIconByType}
                mainProblems={problems}
            />
            <Divider/>

            <TrainingPlanArea
                getIconByType={getIconByType}
                trainingObjective={trainingObjectives}
            />

            <Divider/>

            <RecommendationsArea
                getIconByType={getIconByType}
                recommendations={generalRecommendations}
            />
        </ScrollView>
    )
}
export default SummaryReviewResultTab
