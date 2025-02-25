import {View, Text, Image, ScrollView} from 'react-native'
import React from 'react'
import {images} from '../../constants'

const NoTrainingsAvailable = () => {
    return (
        <ScrollView>
            <View className='flex justify-center items-center gap-16 p-4 pt-8'>
                <View className='flex gap-3 justify-center items-center'>
                    <Text className="text-4xl text-gray-300 text-semibold mt-4 font-cbebas">
                        {/*NO TRAININGS ?*/}
                        COMING SOON
                    </Text>
                    <Text className="text-md text-center text-gray-100 font-mregular">
                        {/*Begin your personalized fitness journey with Fit Review*/}
                        We're building a system to match your goals.
                        Stay tuned!
                    </Text>
                </View>
                <Image
                    source={images.cards}
                    className='max-w-[420px] h-[280px] rounded-xl '
                    resizeMode='contain'
                />
                <View className='flex gap-2'>
                    <Text className="text-xl text-center text-secondary-100 font-cbebas">
                        {/*Discover your potential*/}
                        Personalized workouts are on the way!
                    </Text>
                </View>
            </View>
            {/*<Button*/}
            {/*    title="Start Fit Review"*/}
            {/*    onPress={() => router.push('/review')}*/}
            {/*    containerStyles="mt-2 mx-6"*/}
            {/*    icon={'caret-forward'}*/}
            {/*/>*/}
        </ScrollView>
    )
}
export default NoTrainingsAvailable
