import {View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import {validatePasscode} from "@/service/PasscodeService";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/common/Button";
import {useGlobalContext} from "@/context/GlobalProvider";
import {addNewReviewStatus, createNewReview} from "@/service/ReviewService";
import {SurveyStatus} from "@/constants/survey";
import FormField from "@/components/common/FormField";

const PaymentReviewScreen = ({setStatus}) => {
    const {setReviewId} = useGlobalContext();
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
        <ScrollView>
            <View className='pt-4'>
                <PageHeader title='Enter Passcode'/>
            </View>

            <View className="w-full justify-center px-4 my-24">
                <FormField
                    title="Passcode"
                    value={passcode}
                    handleChangeText={setPasscode}
                    keyboardType="numeric"
                />

                {error && <Text className='text-red-500 mt-2'>{error}</Text>}

                <Button
                    title="Submit"
                    onPress={handlePasscodeSubmit}
                    containerStyles="mt-10"
                />
            </View>
        </ScrollView>
    );
};
export default PaymentReviewScreen;