import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import NumberFormField from "@/components/common/NumberFormField";
import NextQuestionButton from "@/components/NextQuestionButton";
import {createStatusRecord, saveAnswer} from "@/lib/SurveyService";
import {router} from "expo-router";

const NumberInputSurveyStepScreen = ({user, slug, surveyStep}) => {

    const [value, setValue] = useState(null);

    const preSubmitAction = async () => {
        if (surveyStep) {
            await saveAnswer(user.$id, surveyStep.$id, [value]);
            const newStatus = await createStatusRecord(user.$id, surveyStep.nextStatus);
            console.log("[NumberInputSurveyStepScreen_preSubmitAction] Status changed to: " + newStatus.value)
        } else {
            console.log("[NumberInputSurveyStepScreen_preSubmitAction] No suitable condition for NumberInput question");
            router.push('/review');
        }

        console.log("[NumberInputSurveyStepScreen_preSubmitAction] " + surveyStep.slug + ' question done successful')
    }

    return (
            <ScrollView>
                <View className='flex-1 gap-48 pt-8'>
                    <View name='question-header' className='pt-2 px-4'>
                        <Text className='text-md text-gray-300 font-mmedium'>
                            Step {surveyStep?.stepNumber}
                        </Text>
                        <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                            {surveyStep?.question}
                        </Text>
                        <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        </Text>
                    </View>

                    <View className='items-center'>
                        <NumberFormField
                            title={surveyStep.title}
                            titleInvisible
                            placeholder={surveyStep.placeholder}
                            value={value}
                            handleChangeText={setValue}
                            otherStyles="m-6"
                        />
                    </View>

                    <View name='question-next-button' className='pt-4 px-4'>
                        <NextQuestionButton
                            disabled={!value}
                            //TODO заменить логику, если нет некст слага, значит заканчиваем опрос
                            path={surveyStep.nextSlug ? `/review/survey/${surveyStep.nextSlug}` : '/review'}
                            preSubmitAction={preSubmitAction}
                        />
                    </View>
                </View>
            </ScrollView>
    )
}
export default NumberInputSurveyStepScreen
