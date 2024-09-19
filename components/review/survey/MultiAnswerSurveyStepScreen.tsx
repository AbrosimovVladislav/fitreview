import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import PageHeader from "@/components/PageHeader";
import AnswerOption from "@/components/AnswerOption";
import NextQuestionButton from "@/components/NextQuestionButton";
import useAppwrite from "@/lib/useAppwrite";
import {Question} from "@/constants/interface";
import {createStatusRecord, getCurrentStatus, getQuestionsByType, updateSurveyRecordField} from "@/lib/SurveyService";
import {router} from "expo-router";
import {surveySteps} from "@/constants/survey";

const MultiAnswerSurveyStepScreen = ({user, slug, surveyStep}) => {

    const {data: questions} = useAppwrite<Question[]>(() => getQuestionsByType(slug));

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

    const preSubmitAction = async () => {
        const currentStatus = await getCurrentStatus(user.$id)

        const currentStep = surveySteps.find(pd => pd.status === currentStatus && pd.slug === slug);

        if (currentStep) {
            await updateSurveyRecordField(user.$id, currentStep.field, pressed);
            const newStatus = await createStatusRecord(user.$id, currentStep.nextStatus);
            console.log("[MultiAnswerPage_preSubmitAction] Status changed to: " + newStatus.value)
        } else {
            console.log("[MultiAnswerPage_preSubmitAction] No suitable condition for MultiAnswer question");
            router.push('/review');
        }

        console.log("[MultiAnswerPage_preSubmitAction] " + surveyStep.slug + ' question done successful')
    }

    return (
        <ScrollView>
            <View name='question-header' className='pt-6 px-4'>
                <Text className='text-md text-gray-300 font-mmedium'>
                    Step {surveyStep?.stepNumber} of {surveySteps.length}
                </Text>
                <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                    {surveyStep?.question}
                </Text>
                <Text className='text-md text-gray-300 font-mmedium pt-1'>
                    {surveyStep?.description}
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
                                    //TODO заменить логику, если нет некст слага, значит заканчиваем опрос
                                    path={surveyStep.nextSlug ? `/review/survey/${surveyStep.nextSlug}` : '/review'}
                                    preSubmitAction={preSubmitAction}/>
            </View>
        </ScrollView>
    )
}
export default MultiAnswerSurveyStepScreen
