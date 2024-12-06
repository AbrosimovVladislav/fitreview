import React, {useState} from 'react'
import Button from "@/components/common/Button";
import {saveAnswer} from "@/service/SurveyService";
import {addNewReviewStatusRecord} from "@/service/ReviewService";
import {SurveyStatus} from "@/constants/survey";

const SubmitSurveyButton = ({disabled, questionId, answerValue, setPressed, setStatus}) => {

    const testUserId='1';

    const [isLoading, setIsLoading] = useState(false);

    const submitSurveyOnPress = async () => {
        setIsLoading(true);
        //save answer
        await saveAnswer(testUserId, questionId, answerValue)

        //clear pressed
        setPressed && setPressed([]);

        //change status
        await addNewReviewStatusRecord(testUserId, SurveyStatus.WaitingForResults);
        setStatus(SurveyStatus.WaitingForResults);
        setIsLoading(false);
    }

    return (
        <Button
            disabled={disabled || isLoading}
            title="Submit Survey"
            isLoading={isLoading}
            onPress={submitSurveyOnPress}
        />
    )
}
export default SubmitSurveyButton
