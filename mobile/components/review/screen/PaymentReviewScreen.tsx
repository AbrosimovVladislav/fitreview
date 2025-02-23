import { View, ScrollView, TextInput, Text } from 'react-native';
import React, { useState } from 'react';
import { validatePasscode } from "@/service/PasscodeService";
import { SafeAreaView } from "react-native-safe-area-context";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/common/Button";
import { useGlobalContext } from "@/context/GlobalProvider";
import {addNewReviewStatus, createNewReview} from "@/service/ReviewService";
import {SurveyStatus} from "@/constants/survey";

const PaymentReviewScreen = ({ setStatus }) => {
    const { setReviewId } = useGlobalContext();
    const [passcode, setPasscode] = useState("");
    const [error, setError] = useState("");

    const handlePasscodeSubmit = async () => {
        try {
            await validatePasscode(passcode);

            // Создание нового Review после успешной валидации пасскода
            const reviewId = await createNewReview();
            setReviewId(reviewId);
            await addNewReviewStatus(reviewId, SurveyStatus.FirstSurvey);
            setStatus(SurveyStatus.FirstSurvey);
        } catch (e) {
            setError("Invalid passcode. Please try again.");
        }
    };

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='pt-4'>
                    <PageHeader title='Enter Passcode'/>
                    <TextInput
                        value={passcode}
                        onChangeText={setPasscode}
                        placeholder="Enter passcode"
                        className="mx-6 mt-2 border border-gray-300 p-2 rounded"
                    />
                    <Button
                        title="Submit"
                        onPress={handlePasscodeSubmit}
                        containerStyles="mt-2 mx-6"
                    />
                    {error && <Text className='text-red-500 mx-6'>{error}</Text>}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default PaymentReviewScreen;