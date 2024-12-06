import React from 'react'
import SurveyComponent from "@/components/review/survey/SurveyComponent";

const SecondSurveyReviewScreen = ({setStatus}) => {
    const testUserId = '1';

    //TODO take from db???
    const secondSurveyList = [
        {
            step: 1,
            questionId: 5
        },
        {
            step: 2,
            questionId: 6
        },
        {
            step: 3,
            questionId: 8
        },
        {
            step: 4,
            questionId: 11
        },
        {
            step: 5,
            questionId: 12
        },
        {
            step: 6,
            questionId: 13
        },
        {
            step: 7,
            questionId: 14
        }
    ]

    return (
        <SurveyComponent
            userId={testUserId}
            surveyList={secondSurveyList}
            setStatus={setStatus}
        />
    )
}
export default SecondSurveyReviewScreen
