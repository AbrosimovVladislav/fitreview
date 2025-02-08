import React, {useCallback, useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import WelcomeReviewScreen from "@/components/review/screen/WelcomeReviewScreen";
import WaitingForResultReviewScreen from "@/components/review/screen/WaitingForResultReviewScreen";
import ResultsReviewScreen from "@/components/review/screen/ResultsReviewScreen";
import FirstSurveyReviewScreen from "@/components/review/screen/FirstSurveyReviewScreen";
import SecondSurveyReviewScreen from "@/components/review/screen/SecondSurveyReviewScreen";
import {getReviewStatusById} from "@/service/ReviewService";
import PaymentReviewScreen from "@/components/review/screen/PaymentReviewScreen";
import {useFocusEffect} from "expo-router";
import {useGlobalContext} from "@/context/GlobalProvider";


const Review = () => {
    const {reviewId} = useGlobalContext();

    const [status, setStatus] = useState('WelcomeScreen');

    const statusComponentMap = {
        WelcomeScreen: <WelcomeReviewScreen setStatus={setStatus}/>,
        PaymentScreen: <PaymentReviewScreen setStatus={setStatus}/>,
        FirstSurvey: <FirstSurveyReviewScreen setStatus={setStatus}/>,
        WaitingForResults: <WaitingForResultReviewScreen setStatus={setStatus}/>,
        ReviewResults: <ResultsReviewScreen/>,
        SecondSurvey: <SecondSurveyReviewScreen setStatus={setStatus}/>,
    };

    useEffect(() => {
        refreshPageAccordingToTheStatus();
    }, [])

    useEffect(() => {
        refreshPageAccordingToTheStatus();
    }, [status])

    useFocusEffect(
        useCallback(() => {
            refreshPageAccordingToTheStatus();
        }, [])
    );


    const refreshPageAccordingToTheStatus = async () => {
        try {
            if (reviewId) {
                const currentStatus = await getReviewStatusById(reviewId);

                //if status was not created yet, then not refresh state
                if (currentStatus) {
                    setStatus(currentStatus.value);
                }
            }
        } catch (error) {
            console.error("[Review_refreshPageAccordingToTheStatus] Status receiving error:", error);
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            {
                statusComponentMap[status]
            }
        </SafeAreaView>
    )
}

export default Review
