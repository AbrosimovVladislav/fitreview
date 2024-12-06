import {TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

const PreviousQuestionButton = ({setPressed, currentStep, setCurrentStep}) => {

    const previousQuestionOnPress = () => {
        //clear pressed
        setPressed && setPressed([]);

        //change step
        setCurrentStep(prevStep => prevStep - 1);
    }

    return (
        <TouchableOpacity style={{ zIndex: 1 }} disabled={currentStep===1} onPress={previousQuestionOnPress} className={`pl-2`}>
            <Ionicons name="chevron-back-outline" size={28} color={currentStep===1 ? "gray" : "white"}/>
        </TouchableOpacity>
    )
}
export default PreviousQuestionButton
