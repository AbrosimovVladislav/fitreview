import React, {useState} from 'react'
import Button from "@/components/common/Button";
import {saveAnswer} from "@/service/SurveyService";
import {addNewReviewStatusRecord} from "@/service/ReviewService";
import {SurveyStatus} from "@/constants/survey";
import {generateImageName, uploadImageToAPI} from "@/service/StorageService"

const SubmitSurveyButton = ({
                                disabled,
                                questionId,
                                answerValue,
                                setPressed,
                                setStatus,
                                photoQuestion,
                                setUploadedImage
                            }) => {

    const testUserId = '1';

    const [isLoading, setIsLoading] = useState(false);

    const submitSurveyOnPress = async () => {
        setIsLoading(true);

        //TODO подумать как вынести логику пресабмит действия для фото вопроса
        if (photoQuestion) {
            //Если это не сохраненное фото, а подгруженное локально, то загружаем в стор
            if (!answerValue.includes("http")) {
                const imageName = generateImageName(testUserId, questionId);
                const photoUrl = await uploadImageToAPI(answerValue, imageName);
                answerValue = photoUrl;
            }
            setUploadedImage(null);
        }

        //save answer
        await saveAnswer(testUserId, questionId, answerValue)

        //TODO подумать как вынести логику пресабмит действия для мульти вопроса
        //clear pressed ONLY FOR MULTIANSWER
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
