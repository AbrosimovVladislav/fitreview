import React, {useState} from 'react'
import Button from "@/components/common/Button";
import {saveAnswer} from "@/service/SurveyService";

const NextQuestionButton = ({disabled, questionId, answerValue, setPressed, setCurrentStep}) => {

    const testUserId = '1';

    const [isLoading, setIsLoading] = useState(false);

    const nextQuestionOnPress = async () => {
        setIsLoading(true);
        //save answer
        await saveAnswer(testUserId, questionId, answerValue)

        //clear pressed
        setPressed && setPressed([]);

        //change step
        setCurrentStep(prevStep => prevStep + 1);
        setIsLoading(false);
    }

    return (
        <Button
            disabled={disabled || isLoading}
            title="Next Step"
            isLoading={isLoading}
            onPress={nextQuestionOnPress}
        />
    )
}
export default NextQuestionButton
