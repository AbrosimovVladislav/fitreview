import {View, Text, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import NextQuestionButton from "@/components/NextQuestionButton";
import {Picker} from "@react-native-picker/picker";

const AgeQuestion = () => {

    const [selectedAge, setSelectedAge] = useState(27);

    const preSubmitAction = () => {

    }

    return (
        <SafeAreaView className='bg-primary flex-1  h-full'>
            <ScrollView>
                <PageHeader/>
                <View className='flex-1 gap-28 pt-4'>
                    <View name='question-header' className='pt-2 px-4'>
                        <Text className='text-md text-gray-300 font-mmedium'>
                            Step 5 of 7
                        </Text>
                        <Text className="text-3xl text-gray-300 text-semibold pt-4 font-cbebas">
                            How old are you ?
                        </Text>
                        <Text className='text-md text-gray-300 font-mmedium pt-1'>
                        </Text>
                    </View>

                    <View className='items-center'>
                        <Picker
                            selectedValue={selectedAge}
                            onValueChange={(itemValue) => setSelectedAge(itemValue)}
                            itemStyle={{
                                fontSize: 26,
                                color: 'white',
                                fontFamily: 'Montserrat-Medium'
                            }}
                            style={{height: 250, width: 150}}
                        >
                            {/* Генерация возраста от 18 до 60 */}
                            {Array.from({length: 77}, (_, i) => i + 14).map((age) => (
                                <Picker.Item key={age} label={String(age)} value={age}/>
                            ))}
                        </Picker>
                    </View>

                    <View name='question-next-button' className='pt-4 px-4'>
                        <NextQuestionButton
                            path={'/review/survey/weight-question'}
                            preSubmitAction={preSubmitAction}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AgeQuestion
