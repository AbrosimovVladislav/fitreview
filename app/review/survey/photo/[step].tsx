import {Image, ScrollView, Text, View} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import {SafeAreaView} from "react-native-safe-area-context";
import NextQuestionButton from "@/components/NextQuestionButton";

import {images} from '../../../../constants'
import UploadArea from "@/components/common/UploadArea";

const PhotoQuestionStepPage = () => {

    const preSubmitAction = () =>{

    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <PageHeader/>
                <View className='flex-1'>
                    <View name='question-header' className='pt-2 px-4'>
                        <Text className='text-md text-gray-300 font-mmedium'>
                            Step 7 of 7
                        </Text>
                        <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                            Upload photos
                        </Text>
                        <Text className='text-md text-gray-300 font-mmedium pt-1'>
                            Upload 2 photos like on a pictures below
                        </Text>
                    </View>

                    <View name='example pictures'
                        className='flex-row justify-between px-4'>
                        <Image
                            source={images.cards}
                            className='w-[180px] h-[240px] rounded-xl'
                            resizeMode='contain'
                        />
                        <Image
                            source={images.cards}
                            className='w-[180px] h-[240px] rounded-xl'
                            resizeMode='contain'
                        />
                    </View>

                    <View name='upload picture area'>
                        <UploadArea/>
                    </View>

                    <View name='question-next-button' className='pt-4 px-4'>
                        <NextQuestionButton
                            path={'/review/survey/photo/photo-step-2'}
                            preSubmitAction={preSubmitAction}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PhotoQuestionStepPage
