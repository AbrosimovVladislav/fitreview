import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import Collapsible from "react-native-collapsible";
import {Ionicons} from "@expo/vector-icons";

const Accordion = ({title, initCollapsed, content}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        setIsCollapsed(initCollapsed);
    },[initCollapsed])

    return (
        <View className='pt-2 pb-3'>
            <TouchableOpacity className='flex-row justify-between items-center' onPress={() => setIsCollapsed(!isCollapsed)}>
                <Text className='text-2xl pl-1 pb-2 text-white text-semibold font-cbebas'>
                    {title}
                </Text>
                <Ionicons name={isCollapsed ? 'chevron-down' : 'chevron-up'} size={26} color='white'/>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                {content}
            </Collapsible>
        </View>
    );
}
export default Accordion
