import {View, ScrollView} from 'react-native'
import React from 'react'
import PageHeader from "@/components/PageHeader";
import Button from "@/components/common/Button";

const ReviewResultsScreen = () => {
    return (
        <ScrollView>
            <View className='pt-4'>
                <PageHeader title='Fit Review'/>
                <Button
                    title="Results"
                    containerStyles="mt-2 mx-6"
                    icon={'ribbon'}
                    onPress={() => console.log("[Review_reviewResultsScreen] results")}/>
            </View>
        </ScrollView>
    )
}
export default ReviewResultsScreen
