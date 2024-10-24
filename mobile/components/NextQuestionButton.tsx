import React, {useState} from 'react'
import Button from "@/components/common/Button";
import {router} from "expo-router";

const NextQuestionButton = ({path, finishSurvey, preSubmitAction, disabled}) => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            await preSubmitAction();
            router.push(path)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <Button
            disabled={disabled || isLoading}
            title={finishSurvey ? "Finish Survey" : "Next Step"}
            isLoading={isLoading}
            onPress={onSubmit}
        />
    )
}
export default NextQuestionButton
