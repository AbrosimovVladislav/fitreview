import {View, Text, ScrollView} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import AnswerOption from "@/components/AnswerOption";
import NextQuestionButton from "@/components/review/survey/NextQuestionButton";
import PreviousQuestionButton from "@/components/review/survey/PreviousQuestionButton";
import SubmitSurveyButton from "@/components/review/survey/SubmitSurveyButton";

const MultiAnswerQuestionComponent = ({step, setCurrentStep, question, answer, lastQuestion, setStatus}) => {

    const testUserId='1';

    const scrollViewRef = useRef(null);
    const [pressed, setPressed] = useState([]);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({y: 0, animated: true});
        }
    }, [question])

    useEffect(() => {
        answer && setPressed(JSON.parse(answer));
    }, [answer])


    const answerOptionOnPress = (title) => {
        setPressed((prevPressed) => {
            if (prevPressed.includes(title)) {
                return prevPressed.filter((item) => item !== title);
            } else {
                return [...prevPressed, title];
            }
        });
    };

    const defineIsPressed = (title: string): boolean => {
        return pressed.includes(title);
    }

    return (
        <ScrollView ref={scrollViewRef}>
            <PreviousQuestionButton
                setPressed={setPressed}
                currentStep={step}
                setCurrentStep={setCurrentStep}/>

            <View name='question-header' className='pt-4 px-4'>
                <Text className='text-md text-gray-300 font-mmedium'>
                    Step {step}
                </Text>
                <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                    {question?.value}
                </Text>
                <Text className='text-md text-gray-300 font-mmedium pt-1'>
                    {question?.description}
                </Text>
            </View>

            <View name='question-options' className='flex justify-center items-center mt-4'>
                {question.answerOptions && question.answerOptions.map((option, index) => {
                    if (index % 2 === 0) {
                        return (
                            <View key={index} className="flex-row justify-between">
                                <AnswerOption
                                    title={option.title}
                                    image={option.image}
                                    pressed={defineIsPressed(option.title)}
                                    onPress={() => answerOptionOnPress(option.title)}/>
                                {question.answerOptions[index + 1] && (
                                    <AnswerOption
                                        title={question.answerOptions[index + 1].title}
                                        image={question.answerOptions[index + 1].image}
                                        pressed={defineIsPressed(question.answerOptions[index + 1].title)}
                                        onPress={() => answerOptionOnPress(question.answerOptions[index + 1].title)}/>
                                )}
                            </View>
                        );
                    }
                    return null;
                })}
            </View>

            <View name='question-next-button' className='pt-4 px-4'>
                {
                    lastQuestion
                        ? <SubmitSurveyButton
                            disabled={pressed.length == 0}
                            questionId={question.id}
                            answerValue={pressed}
                            setPressed={setPressed}
                            setStatus={setStatus}/>
                        : <NextQuestionButton disabled={pressed.length == 0}
                                              questionId={question.id}
                                              answerValue={pressed}
                                              setPressed={setPressed}
                                              setCurrentStep={setCurrentStep}/>
                }

            </View>
        </ScrollView>
    )
}
export default MultiAnswerQuestionComponent
