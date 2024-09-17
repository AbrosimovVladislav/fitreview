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
import {SurveyStatus} from "@/constants/survey-status";

const PhotoQuestionStepPage = () => {

    const {user} = useGlobalContext();

    const {slug} = useLocalSearchParams();

    const [uploadedImages, setUploadedImages] = useState([]);

    const pageDefinitions = [
        {
            id: 1,
            slug: "front-view",
            title: "Front View Photos",
            status: SurveyStatus.FrontViewPhotoStep,
            nextStatus: SurveyStatus.SideViewPhotoStep,
            samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
            samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        },
        {
            id: 2,
            slug: "side-view",
            title: "Side View Photos",
            status: SurveyStatus.SideViewPhotoStep,
            nextStatus: SurveyStatus.FrontViewWithRaisedLegPhotoStep,
            samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
            samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        },
        {
            id: 3,
            slug: "front-view-raised-leg",
            title: "Front View Photos With Raised Leg",
            status: SurveyStatus.FrontViewWithRaisedLegPhotoStep,
            nextStatus: SurveyStatus.SideViewWithRaisedLegPhotoStep,
            samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
            samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        },
        {
            id: 4,
            slug: "side-view-raised-leg",
            title: "Side View Photos With Raised Leg",
            status: SurveyStatus.SideViewWithRaisedLegPhotoStep,
            nextStatus: SurveyStatus.WaitingForResults,
            samplePhoto1: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
            samplePhoto2: "https://cloud.appwrite.io/v1/storage/buckets/66c331f000314ec68775/files/66e2af30002b4045effa/view?project=66c32ed800357b5e7314&project=66c32ed800357b5e7314",
        },
    ]
    const [pageDefinition, setPageDefinition] = useState(pageDefinitions[0])

    useEffect(() => {
        setPageDefinition(pageDefinitions.find(e => e.slug === slug));
    }, [slug])

    const currentStep = pageDefinitions.find(pd => pd.id === pageDefinition?.id)?.slug;
    const nextStep = pageDefinitions.find(pd => pd.id === pageDefinition?.id + 1)?.slug;

    const preSubmitAction = async () => {
        const currentStatus = await getCurrentStatus(user.$id)

        const currentStep = pageDefinitions.find(pd => pd.status === currentStatus);

        if(currentStep){
            const photoUrls = await upload(uploadedImages);
            console.log("photoUrls " + photoUrls)
            await updateSurveyRecordArrayFieldWithAdditionalValues(user.$id, "photos", photoUrls)

            const newStatus = await createStatusRecord(user.$id, currentStep.nextStatus);
            console.log("Status changed to: " + newStatus.value)
        } else {
            console.log("No suitable condition for Photo question")
            router.replace('/review');
        }

        console.log(pageDefinition.slug + ' question done successful')
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
                            path={nextStep ? `/review/survey/photo/${nextStep}` : '/review'}
                            finishSurvey={!nextStep}
                            preSubmitAction={preSubmitAction}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PhotoQuestionStepPage
