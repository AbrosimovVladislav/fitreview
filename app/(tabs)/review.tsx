import React, {useCallback, useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {router, useFocusEffect} from "expo-router";

import {useGlobalContext} from "@/context/GlobalProvider";
import {getCurrentStatus} from "@/lib/SurveyService";
import {SurveyStatus, surveySteps} from "@/constants/survey";
import InitialReviewScreen from "@/components/review/InitialReviewScreen";
import WaitingForResultsScreen from "@/components/review/WaitingForResultsScreen";
import ReviewResultsScreen from "@/components/review/ReviewResultsScreen";
import ReviewErrorCase from "@/components/review/ReviewErrorCase";

const Review = () => {

    const {user} = useGlobalContext();

    const [status, setStatus] = useState(null);

    useEffect(() => {
        refreshPageAccordingToTheStatus();
    }, [])

    useFocusEffect(
        useCallback(() => {
            refreshPageAccordingToTheStatus();
        }, [])
    );

    const defineRoutePath = (currentStatus) => {
        const surveyStep = surveySteps.find(step => step.status === currentStatus);
        if(surveyStep){
            return "/review/survey/" + surveyStep.slug
        }
    }

    const refreshPageAccordingToTheStatus = async () => {
        try {
            const currentStatus = await getCurrentStatus(user.$id);
            console.log("[Review_refreshPageAccordingToTheStatus] currentStatus " + currentStatus);
            setStatus(currentStatus);

            const routePath = defineRoutePath(currentStatus);
            if (routePath) {
                router.push(routePath);
            }

        } catch (error) {
            console.error("[Review_refreshPageAccordingToTheStatus] Status receiving error:", error);
        }
    };

    return (
        <SafeAreaView className='bg-primary h-full'>
            {status
                ? status === SurveyStatus.WaitingForResults
                    ? <WaitingForResultsScreen/>
                    : status === SurveyStatus.FirstReviewDone
                        ? <ReviewResultsScreen/>
                        : <ReviewErrorCase/>
                : <InitialReviewScreen/>}
        </SafeAreaView>
    )
}
export default Review
