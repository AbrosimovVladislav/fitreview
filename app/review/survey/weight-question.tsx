import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import NextQuestionButton from "@/components/NextQuestionButton";
import NumberFormField from "@/components/common/NumberFormField";

const AgeQuestion = () => {

    const [weight, setWeight] = useState(75);

    const preSubmitAction = () =>{

    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                    <PageHeader/>
                <View className='flex-1 gap-36 pt-4'>
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
                            path={'/review/survey/estimation-photo-question'}
                            preSubmitAction={preSubmitAction}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AgeQuestion
