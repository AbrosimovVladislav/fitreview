import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "@/context/GlobalProvider";
import MultiAnswerSurveyStepScreenDeprecated from "@/components/review/survey/MultiAnswerSurveyStepScreenDeprecated";
import {useLocalSearchParams} from "expo-router";
import {SurveyStep} from "@/constants/interface";
import NumberInputSurveyStepScreenDeprecated from "@/components/review/survey/NumberInputSurveyStepScreenDeprecated";
import PhotoUploadSurveyStepScreenDeprecated from "@/components/review/survey/PhotoUploadSurveyStepScreenDeprecated";
import ErrorReviewScreen from "@/components/review/screen/ErrorReviewScreen";
import useAppwrite from "@/lib/useAppwrite";
import {getSurveyStepBySlug} from "@/lib/SurveyService";
import {defaultFirstSurveyStep} from "@/constants/survey";
import LoadingView from "@/components/LoadingView";

const SurveyStepPage = () => {

    const {user} = useGlobalContext();
    const {slug} = useLocalSearchParams();

    const {data: surveyStepData} = useAppwrite<SurveyStep>(() => getSurveyStepBySlug(slug));

    const [surveyStep, setSurveyStep] = useState<SurveyStep>(defaultFirstSurveyStep);

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
                    ? <MultiAnswerSurveyStepScreenDeprecated
                        user={user}
                        slug={slug}
                        surveyStep={surveyStep}/>
                    : surveyStep.type === 'numberinput'
                        ? <NumberInputSurveyStepScreenDeprecated
                            user={user}
                            slug={slug}
                            surveyStep={surveyStep}/>
                        : surveyStep.type === 'photoupload'
                            ? <PhotoUploadSurveyStepScreenDeprecated
                                user={user}
                                slug={slug}
                                surveyStep={surveyStep}/>
                            : <ErrorReviewScreen/>
            }

        </SafeAreaView>
    )
}
export default SurveyStepPage
