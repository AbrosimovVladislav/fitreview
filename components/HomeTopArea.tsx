import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {useGlobalContext} from "@/context/GlobalProvider";
import {Icon} from "native-base";
import {Ionicons} from "@expo/vector-icons";

const HomeTopArea = () => {

    const {user} = useGlobalContext();

    return (
        <View className='flex flex-col gap-3  w-full'>

            <View className='flex flex-row justify-between items-center'>
                <Image
                    source={{uri: user?.avatar}}
                    className='w-14 h-14 border border-secondary rounded-xl'
                    resizeMode='contain'
                />
                <TouchableOpacity onPress={() => {
                }}>
                    <Icon as={Ionicons} name='notifications-outline' size="xl" color='white'/>
                </TouchableOpacity>
            </View>

            <View>
                <Text className='text-md font-mmedium text-gray-300'>
                    Hello, Good Morning
                </Text>
                <Text className='text-3xl font-bebas text-gray-300 pt-2'>
                    {user?.username} !
                </Text>
            </View>
        </View>

    )
}
export default HomeTopArea
