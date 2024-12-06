import React, {useState} from 'react'
import Button from "@/components/common/Button";
import {saveAnswer} from "@/service/SurveyService";
import {uploadImage} from "@/lib/StorageService";

const NextQuestionButton = ({
                                disabled,
                                questionId,
                                answerValue,
                                setPressed,
                                setCurrentStep,
                                photoQuestion,
                                setUploadedImage
                            }) => {

    const testUserId = '1';

    const [isLoading, setIsLoading] = useState(false);

    const nextQuestionOnPress = async () => {
        setIsLoading(true);

        //TODO подумать как вынести логику пресабмит действия для фото вопроса
        if (photoQuestion) {
            //Если это не сохраненное фото, а подгруженное локально, то загружаем в стор
            if(!answerValue.includes("http")){
                const photoUrl = await uploadImage(answerValue);
                answerValue = photoUrl;
            }
            setUploadedImage(null);
        }

        //save answer
        await saveAnswer(testUserId, questionId, answerValue)

        //TODO подумать как вынести логику пресабмит действия для мульти вопроса
        //clear pressed ONLY FOR MULTIANSWER
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
