import React, {useEffect, useState} from 'react'
import {Question} from "@/constants/interface";
import MultiAnswerQuestionComponent from "@/components/review/survey/MultiAnswerQuestionComponent";
import ErrorReviewScreen from "@/components/review/screen/ErrorReviewScreen";
import {View} from "react-native";
import NumberInputQuestionComponent from "@/components/review/survey/NumberInputQuestionComponent";
import PhotoQuestionComponent from "@/components/review/survey/PhotoQuestionComponent";
import {getAnswerByUserIdAndQuestionId, getQuestionById} from "@/service/SurveyService";

const FirstSurveyReviewScreen = ({setStatus}) => {

    const testUserId = '1';

    const [currentStep, setCurrentStep] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [existingAnswer, setExistingAnswer] = useState(null);

    //TODO take from db???
    const firstSurveyList = [
        {
            step: 1,
            questionId: 1
        },
        {
            step: 2,
            questionId: 2
        },
        {
            step: 3,
            questionId: 3
        },
        {
            step: 4,
            questionId: 4
        },
        {
            step: 5,
            questionId: 7
        },
        {
            step: 6,
            questionId: 8
        },
        {
            step: 7,
            questionId: 11
        },
        {
            step: 8,
            questionId: 12
        },
        {
            step: 9,
            questionId: 13
        },
        {
            step: 10,
            questionId: 14
        }
    ]

    const defineQuestionIdByCurrentStep = () => {
        return firstSurveyList.filter(item => currentStep === item.step)[0].questionId;
    }

    useEffect(() => {
        const loadQuestionAndExistingAnswers = async () => {
            const questionId = defineQuestionIdByCurrentStep();
            if (questionId) {
                const fetchedQuestion = await getQuestionById(questionId);
                setCurrentQuestion(fetchedQuestion);
                let answer = await getAnswerByUserIdAndQuestionId(testUserId, questionId);
                setExistingAnswer(answer);
            }
        };

        loadQuestionAndExistingAnswers();
    }, [currentStep]);

    const getQuestionComponent = () => {
        switch (currentQuestion.type) {
            case 'MULTIANSWER':
                return (
                    <MultiAnswerQuestionComponent
                        step={currentStep}
                        setCurrentStep={setCurrentStep}
                        question={currentQuestion}
                        answer={existingAnswer}
                        lastQuestion={firstSurveyList.length === currentStep}
                        setStatus={setStatus}
                    />
                );
            case 'NUMBERINPUT':
                return (
                    <NumberInputQuestionComponent
                        step={currentStep}
                        setCurrentStep={setCurrentStep}
                        question={currentQuestion}
                        answer={existingAnswer}
                        lastQuestion={firstSurveyList.length === currentStep}
                        setStatus={setStatus}
                    />
                );
            case 'PHOTO':
                return (
                    <PhotoQuestionComponent
                        step={currentStep}
                        setCurrentStep={setCurrentStep}
                        question={currentQuestion}
                        answer={existingAnswer}
                        lastQuestion={firstSurveyList.length === currentStep}
                        setStatus={setStatus}
                    />
                );
            default:
                return <ErrorReviewScreen/>;
        }
    };


    return (
        <View>
            {currentQuestion && getQuestionComponent()}
        </View>
    )
}
export default FirstSurveyReviewScreen
