import {TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const DetailsButton = ({regionName, setBottomSheetVisible}) => {

    function handleDetailsPress() {
        setBottomSheetVisible(true);
    }

    return (
        <TouchableOpacity
            onPress={handleDetailsPress}
            className={regionName.includes("R") ? "absolute top-10 right-0" : "absolute top-10 left-0"}
        >
            <Ionicons name='search-circle' size={48}
                      color='#FF9001'/>
        </TouchableOpacity>
    )
}
export default DetailsButton
