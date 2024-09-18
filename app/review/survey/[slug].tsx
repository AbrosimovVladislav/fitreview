import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "@/context/GlobalProvider";
import MultiAnswerSurveyStepScreen from "@/components/review/survey/MultiAnswerSurveyStepScreen";
import {useLocalSearchParams} from "expo-router";
import {surveySteps} from "@/constants/survey";
import {SurveyStep} from "@/constants/interface";
import NumberInputSurveyStepScreen from "@/components/review/survey/NumberInputSurveyStepScreen";
import PhotoUploadSurveyStepScreen from "@/components/review/survey/PhotoUploadSurveyStepScreen";
import ReviewErrorCase from "@/components/review/ReviewErrorCase";

const SurveyStepPage = () => {

    const {user} = useGlobalContext();
    const {slug} = useLocalSearchParams();

    const [surveyStep, setSurveyStep] = useState<SurveyStep>(surveySteps[0]);

    useEffect(() => {
        setSurveyStep(surveySteps.find(e => e.slug === slug));
    }, [slug])

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
