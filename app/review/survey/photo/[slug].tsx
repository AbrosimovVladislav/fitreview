import {Image, ScrollView, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import PageHeader from "@/components/PageHeader";
import {SafeAreaView} from "react-native-safe-area-context";
import NextQuestionButton from "@/components/NextQuestionButton";
import UploadArea from "@/components/common/UploadArea";
import {router, useLocalSearchParams} from "expo-router";
import {
    createStatusRecord,
    getCurrentStatus,
    updateSurveyRecordArrayFieldWithAdditionalValues
} from "@/lib/SurveyService";
import {uploadImages as upload} from "@/lib/StorageService";
import {useGlobalContext} from "@/context/GlobalProvider";
import {photoQuestionPageDefinitions} from "@/constants/questions";

const PhotoQuestionPage = () => {

    const {user} = useGlobalContext();

    const {slug} = useLocalSearchParams();

    const [pageDefinition, setPageDefinition] = useState(photoQuestionPageDefinitions[0])
    const [uploadedImages, setUploadedImages] = useState([]);

    useEffect(() => {
        setPageDefinition(photoQuestionPageDefinitions.find(e => e.slug === slug));
    }, [slug])

    const preSubmitAction = async () => {
        const currentStatus = await getCurrentStatus(user.$id)

        const currentStep = photoQuestionPageDefinitions.find(pd => pd.status === currentStatus && pd.slug === slug);

        if (currentStep) {
            const photoUrls = await upload(uploadedImages);
            console.log("[PhotoQuestionPage_preSubmitAction] photoUrls " + photoUrls)
            await updateSurveyRecordArrayFieldWithAdditionalValues(user.$id, "photos", photoUrls)

            const newStatus = await createStatusRecord(user.$id, currentStep.nextStatus);
            console.log("[PhotoQuestionPage_preSubmitAction] Status changed to: " + newStatus.value)
        } else {
            console.log("[PhotoQuestionPage_preSubmitAction] No suitable condition for Photo question")
            router.replace('/review');
        }

        console.log("[PhotoQuestionPage_preSubmitAction] " + pageDefinition.slug + ' question done successful')
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <PageHeader/>
                <View className='flex-1 gap-4'>
                    <View name='question-header' className='pt-2 px-4'>
                        <Text className='text-md text-gray-300 font-mmedium'>
                            Step 7 of 7
                        </Text>
                        <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                            {pageDefinition.title}
                        </Text>
                        <Text className='text-md text-gray-300 font-mmedium pt-1'>
                            Upload 2 photos like on a pictures below
                        </Text>
                    </View>

                    <View name='example pictures'
                          className='flex-row justify-between px-4'>
                        <Image
                            source={{uri: pageDefinition?.samplePhoto1}}
                            className='w-[180px] h-[250px] rounded-xl'
                            resizeMode='contain'
                        />
                        <Image
                            source={{uri: pageDefinition?.samplePhoto2}}
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
                            path={pageDefinition.nextSlug ? `/review/survey/photo/${pageDefinition.nextSlug}` : '/review'}
                            finishSurvey={!pageDefinition.nextSlug}
                            preSubmitAction={preSubmitAction}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PhotoQuestionPage
