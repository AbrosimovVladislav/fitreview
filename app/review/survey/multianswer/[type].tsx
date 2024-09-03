import {View, Text, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {Question} from "@/constants/interface";
import {getQuestionsByType} from "@/lib/appwrite";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import AnswerOption from "@/components/AnswerOption";
import NextQuestionButton from "@/components/NextQuestionButton";

const MultiAnswerPage = () => {

    const {type} = useLocalSearchParams();
    const {data: questions} = useAppwrite<Question[]>(() => getQuestionsByType(type));

    const pageDefinitions = [
        {
            stepNumber: 1,
            type: 'life-style',
            question: 'What is your lifestyle ?',
            description: 'Select one or more options'
        },
        {
            stepNumber: 2,
            type: 'sport-style',
            question: 'What is your sport style ?',
            description: 'Select one or more options'
        },
        {
            stepNumber: 3,
            type: 'health',
            question: 'What is your health ?',
            description: 'Select one or more options'
        },
        {
            stepNumber: 4,
            type: 'nutrition-and-habits',
            question: 'What is your nutrition ?',
            description: 'Select one or more options'
        }
    ]

    const [pressed, setPressed] = useState([]);
    const [pageDefinition, setPageDefinition] = useState(pageDefinitions[0])

    useEffect(() => {
        setPageDefinition(pageDefinitions.find(e => e.type === type));
    }, [type])


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

    const preSubmitAction = () => {
        //save chosen answer options to db
        console.log('life-style preSubmitAction')
    }

    const nextStepType = pageDefinitions.find(pd => pd.stepNumber === pageDefinition?.stepNumber + 1)?.type;

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <PageHeader/>
                <View name='question-header' className='pt-2 px-4'>
                    <Text className='text-md text-gray-300 font-mmedium'>
                        Step {pageDefinition?.stepNumber} of 8
                    </Text>
                    <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                        {pageDefinition?.question}
                    </Text>
                    <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        {pageDefinition?.description}
                    </Text>
                </View>

                <View name='question-options' className='flex justify-center items-center mt-4'>
                    {questions.map((option, index) => {
                        if (index % 2 === 0) {
                            return (
                                <View key={index} className="flex-row justify-between">
                                    <AnswerOption
                                        title={option.title}
                                        image={option.image}
                                        pressed={defineIsPressed(option.title)}
                                        onPress={() => answerOptionOnPress(option.title)}/>
                                    {questions[index + 1] && (
                                        <AnswerOption
                                            title={questions[index + 1].title}
                                            image={questions[index + 1].image}
                                            pressed={defineIsPressed(questions[index + 1].title)}
                                            onPress={() => answerOptionOnPress(questions[index + 1].title)}/>
                                    )}
                                </View>
                            );
                        }
                        return null;
                    })}
                </View>

                <View name='question-next-button' className='pt-4 px-4'>
                    <NextQuestionButton disabled={pressed.length == 0}
                                        path={nextStepType ? `/review/survey/multianswer/${nextStepType}` : '/review/survey/age-question'}
                                        preSubmitAction={preSubmitAction}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default MultiAnswerPage