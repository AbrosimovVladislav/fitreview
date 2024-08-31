import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import NextQuestionButton from "@/components/NextQuestionButton";
import AnswerOption from "@/components/AnswerOption";

import useAppwrite from "@/lib/useAppwrite";
import {getQuestionsByType} from "@/lib/appwrite";
import {Question} from "@/constants/interface";

const LifeStyle = () => {

    const {data: questions} = useAppwrite<Question[]>(() => getQuestionsByType('life-style'));

    const [pressed, setPressed] = useState([]);

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

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <PageHeader/>
                <View name='question-header' className='pt-2 px-4'>
                    <Text className='text-md text-gray-300 font-mmedium'>
                        Step 1 of 8
                    </Text>
                    <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                        What is your lifestyle ?
                    </Text>
                    <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        Select one or more options
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
                    <NextQuestionButton disabled={pressed.length==0} path='/review/survey/sport-style' preSubmitAction={preSubmitAction}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LifeStyle
