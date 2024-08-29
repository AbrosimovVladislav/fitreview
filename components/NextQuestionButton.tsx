import React from 'react'
import Button from "@/components/common/Button";
import {router} from "expo-router";

const NextQuestionButton = ({path, preSubmitAction, disabled}) => {

    const onSubmit = () => {
        preSubmitAction();
        router.push(path)
    }

    return (
        <Button
            disabled={disabled}
            title="Next Step"
            onPress={() => router.push(path)}
        />
    )
}
export default NextQuestionButton
