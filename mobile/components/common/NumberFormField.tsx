import {View, Text, TextInput} from 'react-native'
import React from 'react'

const NumberFormField = ({title, value, placeholder, handleChangeText, otherStyles, titleInvisible, ...props}) => {

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            {
                !titleInvisible && <Text className="text-base text-gray-100 font-mmedium">{title}</Text>
            }

            <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2
            border-black-200 focus:border-secondary flex flex-row items-center">
                <TextInput
                    className="flex-1 text-gray-300 font-msemibold text-base text-center"
                    style={{ fontSize: 22 }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}
export default NumberFormField
