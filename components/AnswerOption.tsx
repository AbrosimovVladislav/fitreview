import {Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import {Icon} from "native-base";

const AnswerOption = ({title, image, pressed, onPress}) => {
    let additionalStyles = pressed ? 'border border-secondary-100' : '';

    return (
        <TouchableOpacity
            onPress={onPress}
            className='flex-1 px-4 py-3 justify-center items-center'>
            <Image
                source={image}
                className={`w-36 h-36 rounded-xl ${additionalStyles}`}
                resizeMode='contain'
            />
            {
                pressed &&
                <Icon as={Ionicons} name='checkmark-circle' size="xl"
                      className='absolute text-secondary-100 top-0 right-3'/>
            }
            <Text className="text-md text-gray-100 font-msemibold pt-2 text-center"
                  style={{flexWrap: 'wrap'}}
            >{title}</Text>
        </TouchableOpacity>
    )
}
export default AnswerOption
