import {View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Question} from "@/constants/interface";
import {getAnswerByUserIdAndQuestionId, getQuestionById} from "@/service/SurveyService";
import MultiAnswerQuestionComponent from "@/components/review/survey/MultiAnswerQuestionComponent";
import NumberInputQuestionComponent from "@/components/review/survey/NumberInputQuestionComponent";
import PhotoQuestionComponent from "@/components/review/survey/PhotoQuestionComponent";
import ErrorReviewScreen from "@/components/review/screen/ErrorReviewScreen";

const SurveyComponent = ({userId, surveyList, setStatus}) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [existingAnswer, setExistingAnswer] = useState(null);


    const defineQuestionIdByCurrentStep = () => {
        return surveyList.filter(item => currentStep === item.step)[0].questionId;
    }

    useEffect(() => {
        const loadQuestionAndExistingAnswers = async () => {
            const questionId = defineQuestionIdByCurrentStep();
            if (questionId) {
                const fetchedQuestion = await getQuestionById(questionId);
                setCurrentQuestion(fetchedQuestion);
                let answer = await getAnswerByUserIdAndQuestionId(userId, questionId);
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
                        lastQuestion={surveyList.length === currentStep}
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
                        lastQuestion={surveyList.length === currentStep}
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
                        lastQuestion={surveyList.length === currentStep}
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
export default SurveyComponent
