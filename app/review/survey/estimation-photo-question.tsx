import {View, ScrollView, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/common/Button";

const EstimationPhotoQuestion = () => {

    const preSubmitAction = () =>{

    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='pt-4'>
                    <PageHeader/>
                    <View name='question-header' className='pt-2 px-4'>
                        <Text className='text-md text-gray-300 font-mmedium'>
                            Step 9 of 9
                        </Text>
                        <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                            Upload your photos in next option ///???///??/
                        </Text>
                        <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        </Text>
                    </View>
                    <Button
                        title="Submit Fit Review"
                        onPress={() => {}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default EstimationPhotoQuestion
