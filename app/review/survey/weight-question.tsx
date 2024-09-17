import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import NextQuestionButton from "@/components/NextQuestionButton";
import NumberFormField from "@/components/common/NumberFormField";
import {createStatusRecord, getCurrentStatus, updateSurveyRecordField} from "@/lib/appwrite";
import {router} from "expo-router";
import {useGlobalContext} from "@/context/GlobalProvider";

const WeightQuestion = () => {

    const {user, setStatus} = useGlobalContext();

    const [weight, setWeight] = useState(null);

    const preSubmitAction = async () => {
        const currentStatus = await getCurrentStatus(user.$id)

        if (currentStatus === "SurveyAgeDone") {
            await updateSurveyRecordField(user.$id, "weight", weight);
            const newStatus = await createStatusRecord(user.$id, "SurveyWeightDone");
            setStatus(newStatus.value)
            console.log("Status changed to: " + newStatus.value)
        } else {
            console.log("No suitable condition for Weight question")
            router.push('/review');
        }
        console.log('Weight question done successful')
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                    <PageHeader/>
                <View className='flex-1 gap-48 pt-4'>
                    <View name='question-header' className='pt-2 px-4'>
                        <Text className='text-md text-gray-300 font-mmedium'>
                            Step 6 of 7
                        </Text>
                        <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                            How much do you weight ?
                        </Text>
                        <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        </Text>
                    </View>
                    <View className='items-center'>
                        <NumberFormField
                            title="Weight"
                            titleInvisible
                            placeholder="Your weight in kg"
                            value={weight}
                            handleChangeText={setWeight}
                            otherStyles="m-6"
                        />
                    </View>

                    <View name='question-next-button' className='pt-4 px-4'>
                        <NextQuestionButton
                            disabled={!weight}
                            path={'/review/survey/photo/front-view'}
                            preSubmitAction={preSubmitAction}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default WeightQuestion
