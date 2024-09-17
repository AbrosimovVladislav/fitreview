import {View, Text, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import useAppwrite from "@/lib/useAppwrite";
import {Question} from "@/constants/interface";
import {createStatusRecord, getCurrentStatus, getQuestionsByType, updateSurveyRecordField} from "@/lib/SurveyService";
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import AnswerOption from "@/components/AnswerOption";
import NextQuestionButton from "@/components/NextQuestionButton";
import {useGlobalContext} from "@/context/GlobalProvider";
import {multiAnswerQuestionPageDefinitions} from "@/constants/questions";

const MultiAnswerPage = () => {

    const {user} = useGlobalContext();
    const {slug} = useLocalSearchParams();
    const {data: questions} = useAppwrite<Question[]>(() => getQuestionsByType(slug));

    const [pageDefinition, setPageDefinition] = useState(multiAnswerQuestionPageDefinitions[0])
    const [pressed, setPressed] = useState([]);

    useEffect(() => {
        setPageDefinition(multiAnswerQuestionPageDefinitions.find(e => e.slug === slug));
    }, [slug])

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

    const preSubmitAction = async () => {
        const currentStatus = await getCurrentStatus(user.$id)

        const currentStep = multiAnswerQuestionPageDefinitions.find(pd => pd.status === currentStatus);

        if (currentStep) {
            await updateSurveyRecordField(user.$id, currentStep.field, pressed);
            const newStatus = await createStatusRecord(user.$id, currentStep.nextStatus);
            console.log("Status changed to: " + newStatus.value)
        } else {
            console.log("No suitable condition for MultiAnswer question");
            router.push('/review');
        }

        console.log(pageDefinition.slug + ' question done successful')
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <PageHeader/>
                <View name='question-header' className='pt-2 px-4'>
                    <Text className='text-md text-gray-300 font-mmedium'>
                        Step {pageDefinition?.stepNumber} of 7
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
                                        path={pageDefinition.nextSlug ? `/review/survey/multianswer/${pageDefinition.nextSlug}` : '/review/survey/age-question'}
                                        preSubmitAction={preSubmitAction}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default MultiAnswerPage