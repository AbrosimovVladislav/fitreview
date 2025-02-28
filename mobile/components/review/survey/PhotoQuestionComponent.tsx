import {View, Text, Image, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import UploadArea from "@/components/common/UploadArea";
import PreviousQuestionButton from "@/components/review/survey/button/PreviousQuestionButton";
import SubmitSurveyButton from "@/components/review/survey/button/SubmitSurveyButton";
import NextQuestionButton from "@/components/review/survey/button/NextQuestionButton";

const PhotoQuestionComponent = ({step, setCurrentStep, question, answer, lastQuestion, setStatus}) => {

    const [uploadedImage, setUploadedImage] = useState(null);

    useEffect(() => {
        //Если это фото из стора, то не закидываем его в сущесвтующий ответ
        if (answer && answer.includes("https")) {
            setUploadedImage(answer.replaceAll('"',""));
        }
    }, [answer])

    return (
        <ScrollView>
            <PreviousQuestionButton
                currentStep={step}
                setCurrentStep={setCurrentStep}/>

            <View className='flex-1 gap-3 pt-4'>
                <View name='question-header' className='pt-2 px-4'>
                    <Text className='text-md text-gray-300 font-mmedium'>
                        Step {step}
                    </Text>
                    <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                        {question?.title}
                    </Text>
                    <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        {question?.description}
                    </Text>
                </View>

                <View name='example pictures'
                      className='flex-row justify-center px-4'>
                    <Image
                        source={{uri: question?.imageExample}}
                        className='w-[180px] h-[250px] rounded-xl'
                        resizeMode='contain'
                    />
                </View>

                <View name='upload picture area'>
                    <UploadArea uploadedImage={uploadedImage} setUploadedImage={setUploadedImage}/>
                </View>

                <View name='question-next-button' className='pt-4 px-4'>
                    {
                        lastQuestion
                            ? <SubmitSurveyButton
                                disabled={!uploadedImage}
                                questionId={question.id}
                                answerValue={uploadedImage}
                                setStatus={setStatus}
                                photoQuestion
                                setUploadedImage={setUploadedImage}/>
                            : <NextQuestionButton
                                disabled={!uploadedImage}
                                questionId={question.id}
                                answerValue={uploadedImage}
                                setCurrentStep={setCurrentStep}
                                photoQuestion
                                setUploadedImage={setUploadedImage}/>
                    }
                </View>
            </View>
        </ScrollView>
    )
}
export default PhotoQuestionComponent
