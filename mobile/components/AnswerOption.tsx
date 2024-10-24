import {Text, Image, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const AnswerOption = ({title, image, pressed, onPress}) => {
    let additionalStyles = pressed ? 'border border-secondary-100' : '';

    return (
        <TouchableOpacity
            onPress={onPress}
            className='flex-1 px-4 py-3 items-center'>
            <Image
                source={{uri: image}}
                className={`w-36 h-36 rounded-xl ${additionalStyles}`}
                resizeMode='contain'
            />
            {
                pressed &&
                <View className='absolute text-secondary-100 top-0 right-3'>
                    <Ionicons name='checkmark-circle' size={28} color='#FF9001'/>
                </View>
            }
            <Text className="text-md text-gray-100 font-msemibold pt-2 text-center"
                  style={{flexWrap: 'wrap'}}
            >{title}</Text>
        </TouchableOpacity>
    )
}
export default AnswerOption
