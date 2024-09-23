import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "@/context/GlobalProvider";
import MultiAnswerSurveyStepScreen from "@/components/review/survey/MultiAnswerSurveyStepScreen";
import {useLocalSearchParams} from "expo-router";
import {SurveyStep} from "@/constants/interface";
import NumberInputSurveyStepScreen from "@/components/review/survey/NumberInputSurveyStepScreen";
import PhotoUploadSurveyStepScreen from "@/components/review/survey/PhotoUploadSurveyStepScreen";
import ReviewErrorCase from "@/components/review/ReviewErrorCase";
import useAppwrite from "@/lib/useAppwrite";
import {getSurveyStepBySlug} from "@/lib/SurveyService";
import LoadingView from "@expo/metro-runtime/build/LoadingView.native";
import {defaultSurveyStep} from "@/constants/survey";

const SurveyStepPage = () => {

    const {user} = useGlobalContext();
    const {slug} = useLocalSearchParams();

    const {data: surveyStepData} = useAppwrite<SurveyStep>(() => getSurveyStepBySlug(slug));

    const [surveyStep, setSurveyStep] = useState<SurveyStep>(defaultSurveyStep);

    useEffect(() => {
        setSurveyStep(surveyStepData);
    }, [surveyStepData])

    if(!surveyStepData){
        return <LoadingView/>
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            {
                surveyStep.type === 'multianswer'
                    ? <MultiAnswerSurveyStepScreen
                        user={user}
                        slug={slug}
                        surveyStep={surveyStep}/>
                    : surveyStep.type === 'numberinput'
                        ? <NumberInputSurveyStepScreen
                            user={user}
                            slug={slug}
                            surveyStep={surveyStep}/>
                        : surveyStep.type === 'photoupload'
                            ? <PhotoUploadSurveyStepScreen
                                user={user}
                                slug={slug}
                                surveyStep={surveyStep}/>
                            : <ReviewErrorCase/>
            }

        </SafeAreaView>
    )
}
export default SurveyStepPage
