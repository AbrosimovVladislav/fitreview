import React, {useCallback, useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import {useGlobalContext} from "@/context/GlobalProvider";
import WelcomeReviewScreen from "@/components/review/screen/WelcomeReviewScreen";
import WaitingForResultReviewScreen from "@/components/review/screen/WaitingForResultReviewScreen";
import ResultsReviewScreen from "@/components/review/screen/ResultsReviewScreen";
import FirstSurveyReviewScreen from "@/components/review/screen/FirstSurveyReviewScreen";
import SecondSurveyReviewScreen from "@/components/review/screen/SecondSurveyReviewScreen";
import {getReviewStatusByUserId} from "@/service/ReviewService";
import PaymentReviewScreen from "@/components/review/screen/PaymentReviewScreen";
import {useFocusEffect} from "expo-router";


const Review = () => {

    const {user} = useGlobalContext();
    const testUserId = '1';

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

    useFocusEffect(
        useCallback(() => {
            refreshPageAccordingToTheStatus();
        }, [])
    );

    const refreshPageAccordingToTheStatus = async () => {
        try {
            const currentStatus = await getReviewStatusByUserId(testUserId);
            console.log("[Review_refreshPageAccordingToTheStatus] currentStatus " + currentStatus.value);

            //if status was not created yet, then not refresh state
            if (currentStatus) {
                setStatus(currentStatus.value);
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
