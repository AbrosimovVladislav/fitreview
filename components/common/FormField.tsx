import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import {Ionicons} from "@expo/vector-icons";
import {Icon} from "native-base";

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-mmedium">{title}</Text>

            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2
            border-black-200 focus:border-secondary flex flex-row items-center">
                <TextInput
                    className="flex-1 text-white font-msemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Icon as={Ionicons} name={!showPassword ? 'eye-outline' : 'eye-off-outline'} color='gray' className='w-6 h-6'/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
export default FormField
