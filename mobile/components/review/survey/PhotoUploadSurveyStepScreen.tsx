import {View, Text, Image, ScrollView} from 'react-native'
import React, {useState} from 'react'
import UploadArea from "@/components/common/UploadArea";
import NextQuestionButton from "@/components/NextQuestionButton";
import {
    createStatusRecord,
    saveAnswer
} from "@/lib/SurveyService";
import {uploadImages as upload} from "@/lib/StorageService";
import {router} from "expo-router";

const PhotoUploadSurveyStepScreen = ({user, slug, surveyStep}) => {

    const [uploadedImages, setUploadedImages] = useState([]);

    const preSubmitAction = async () => {
        if (surveyStep) {
            const photoUrls = await upload(uploadedImages);
            console.log("[PhotoQuestionPage_preSubmitAction] photoUrls " + photoUrls)

            await saveAnswer(user.$id, surveyStep.$id, photoUrls)

            const newStatus = await createStatusRecord(user.$id, surveyStep.nextStatus);
            console.log("[PhotoQuestionPage_preSubmitAction] Status changed to: " + newStatus.value)
        } else {
            console.log("[PhotoQuestionPage_preSubmitAction] No suitable condition for Photo question")
            router.replace('/review');
        }

        console.log("[PhotoQuestionPage_preSubmitAction] " + surveyStep.slug + ' question done successful')
    }

    return (
        <ScrollView>
            <View className='flex-1 gap-4 pt-4'>
                <View name='question-header' className='pt-2 px-4'>
                    <Text className='text-md text-gray-300 font-mmedium'>
                        Step {surveyStep.stepNumber}
                    </Text>
                    <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                        {surveyStep.question}
                    </Text>
                    <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        {surveyStep.description}
                    </Text>
                </View>

                <View name='example pictures'
                      className='flex-row justify-between px-4'>
                    <Image
                        source={{uri: surveyStep?.samplePhoto1}}
                        className='w-[180px] h-[250px] rounded-xl'
                        resizeMode='contain'
                    />
                    <Image
                        source={{uri: surveyStep?.samplePhoto2}}
                        className='w-[180px] h-[250px] rounded-xl'
                        resizeMode='contain'
                    />
                </View>

                <View name='upload picture area'>
                    <UploadArea uploadedImages={uploadedImages} setUploadedImages={setUploadedImages}/>
                </View>

                <View name='question-next-button' className='pt-4 px-4'>
                    <NextQuestionButton
                        disabled={uploadedImages.length < 2}
                        //TODO заменить логику, если нет некст слага, значит заканчиваем опрос
                        path={surveyStep.nextSlug ? `/review/survey/${surveyStep.nextSlug}` : '/review'}
                        finishSurvey={!surveyStep.nextSlug}
                        preSubmitAction={preSubmitAction}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
export default PhotoUploadSurveyStepScreen
