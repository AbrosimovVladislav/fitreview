import {View, Text, Image} from 'react-native'
import React from 'react'
import {useGlobalContext} from "@/context/GlobalProvider";

const HomeTopArea = () => {

    const {user} = useGlobalContext();

    return (
        <View>
            <Image
                source={{uri: user?.avatar}}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
            />
        </View>
    )
}
export default HomeTopArea
