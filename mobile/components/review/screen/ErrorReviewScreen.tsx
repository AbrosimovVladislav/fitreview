import {View, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import Button from "@/components/common/Button";

const ErrorReviewScreen = () => {
    return (
        <ScrollView>
            <View className='pt-4'>
                <PageHeader title='ERROR CASE'/>
                <Button
                    title="ERROR CASE"
                    containerStyles="mt-2 mx-6"
                    icon={'ribbon'}
                    onPress={() => console.error("[ErrorReviewScreen] results_error")}/>
            </View>
        </ScrollView>
    )
}
export default ErrorReviewScreen
