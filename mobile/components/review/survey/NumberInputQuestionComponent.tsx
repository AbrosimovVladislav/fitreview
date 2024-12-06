import {View, Text, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import NumberFormField from "@/components/common/NumberFormField";
import SubmitSurveyButton from "@/components/review/survey/button/SubmitSurveyButton";
import PreviousQuestionButton from "@/components/review/survey/button/PreviousQuestionButton";
import NextQuestionButton from "@/components/review/survey/button/NextQuestionButton";

const NumberInputQuestionComponent = ({step, setCurrentStep, question, answer, lastQuestion, setStatus}) => {

    const [value, setValue] = useState(null);

    useEffect(() => {
        answer ? setValue(answer.replaceAll('"',"")) : setValue(null);
    }, [answer])

    return (
        <ScrollView>
            <PreviousQuestionButton
                currentStep={step}
                setCurrentStep={setCurrentStep}/>

            <View className='flex-1 gap-48 pt-8'>
                <View name='question-header' className='pt-2 px-4'>
                    <Text className='text-md text-gray-300 font-mmedium'>
                        Step {step}
                    </Text>
                    <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                        {question?.value}
                    </Text>
                    <Text className='text-md text-gray-300 font-mmedium pt-1'>
                    </Text>
                </View>

                <View className='items-center'>
                    <NumberFormField
                        title={question?.title}
                        titleInvisible
                        placeholder={question?.placeholder}
                        value={value}
                        handleChangeText={setValue}
                        otherStyles="m-6"
                    />
                </View>

                <View name='question-next-button' className='pt-4 px-4'>
                    {
                        lastQuestion
                            ? <SubmitSurveyButton
                                disabled={!value}
                                questionId={question.id}
                                answerValue={value}
                                setStatus={setStatus}/>
                            : <NextQuestionButton disabled={!value}
                                                  questionId={question.id}
                                                  answerValue={value}
                                                  setCurrentStep={setCurrentStep}/>
                    }
                </View>
            </View>
        </ScrollView>
    )
}
export default NumberInputQuestionComponent
