import React, {useCallback, useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {router, useFocusEffect} from "expo-router";

import {useGlobalContext} from "@/context/GlobalProvider";
import {getCurrentStatus, getSurveyStepByStatus} from "@/lib/SurveyService";
import {SurveyStatus} from "@/constants/survey";
import InitialReviewScreen from "@/components/review/screen/InitialReviewScreen";
import WaitingReviewScreen from "@/components/review/screen/WaitingReviewScreen";
import ResultsReviewScreen from "@/components/review/screen/ResultsReviewScreen";
import ErrorReviewScreen from "@/components/review/screen/ErrorReviewScreen";

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

    const defineRoutePath = async (currentStatus) => {
        const surveyStep = await getSurveyStepByStatus(currentStatus);
        if (surveyStep) {
            return "/review/survey/" + surveyStep.slug
        }
    }

    const refreshPageAccordingToTheStatus = async () => {
        try {
            const currentStatus = await getCurrentStatus(user.$id);
            console.log("[Review_refreshPageAccordingToTheStatus] currentStatus " + currentStatus);
            setStatus(currentStatus);

            const routePath = currentStatus === null ? null :await defineRoutePath(currentStatus);
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
                    ? <WaitingReviewScreen user={user}/>
                    : status === SurveyStatus.FirstReviewDone
                        ? <ResultsReviewScreen user={user}/>
                        : <ErrorReviewScreen/>
                : <InitialReviewScreen/>}
        </SafeAreaView>
    )
}
export default Review
