import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";

import {useGlobalContext} from "@/context/GlobalProvider";
import WelcomeReviewScreen from "@/components/review/screen/WelcomeReviewScreen";
import WaitingForResultReviewScreen from "@/components/review/screen/WaitingForResultReviewScreen";
import ResultsReviewScreen from "@/components/review/screen/ResultsReviewScreen";
import FirstSurveyReviewScreen from "@/components/review/screen/FirstSurveyReviewScreen";
import SecondSurveyReviewScreen from "@/components/review/screen/SecondSurveyReviewScreen";
import {getReviewStatusByUserId} from "@/service/ReviewService";
import PaymentReviewScreen from "@/components/review/screen/PaymentReviewScreen";


const Review = () => {

    const {user} = useGlobalContext();

    const [status, setStatus] = useState('WelcomeScreen');

    const statusComponentMap = {
        WelcomeScreen: <WelcomeReviewScreen setStatus={setStatus}/>,
        PaymentScreen: <PaymentReviewScreen setStatus={setStatus}/>,
        FirstSurvey: <FirstSurveyReviewScreen/>,
        WaitingForResults: <WaitingForResultReviewScreen/>,
        ReviewResults: <ResultsReviewScreen/>,
        SecondSurvey: <SecondSurveyReviewScreen/>,
    };

    useEffect(() => {
        refreshPageAccordingToTheStatus();
    }, [])

    // useFocusEffect(
    //     useCallback(() => {
    //         refreshPageAccordingToTheStatus();
    //     }, [])
    // );

    const refreshPageAccordingToTheStatus = async () => {
        try {
            const currentStatus = await getReviewStatusByUserId('1');
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

// const Review = () => {
//
//     const {user} = useGlobalContext();
//
//     const [status, setStatus] = useState(null);
//
//     useEffect(() => {
//         refreshPageAccordingToTheStatus();
//     }, [])
//
//     useFocusEffect(
//         useCallback(() => {
//             refreshPageAccordingToTheStatus();
//         }, [])
//     );
//
//     const defineRoutePath = async (currentStatus) => {
//         const surveyStep = await getSurveyStepByStatus(currentStatus);
//         if (surveyStep) {
//             return "/review/survey/" + surveyStep.slug
//         }
//     }
//
//     const refreshPageAccordingToTheStatus = async () => {
//         try {
//             const currentStatus = await getCurrentStatus(user.$id);
//             console.log("[Review_refreshPageAccordingToTheStatus] currentStatus " + currentStatus);
//             setStatus(currentStatus);
//
//             const routePath = currentStatus === null ? null :await defineRoutePath(currentStatus);
//             if (routePath) {
//                 router.push(routePath);
//             }
//
//         } catch (error) {
//             console.error("[Review_refreshPageAccordingToTheStatus] Status receiving error:", error);
//         }
//     };
//
//     return (
//         <SafeAreaView className='bg-primary h-full'>
//             {status
//                 ? status === SurveyStatus.WaitingForResults
//                     ? <WaitingForResultReviewScreen user={user}/>
//                     : status === SurveyStatus.FirstReviewDone
//                         ? <ResultsReviewScreen user={user}/>
//                         : <ErrorReviewScreen/>
//                 : <WelcomeReviewScreen/>}
//         </SafeAreaView>
//     )
// }
