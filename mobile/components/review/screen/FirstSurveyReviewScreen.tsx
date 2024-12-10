import React from 'react'
import SurveyComponent from "@/components/review/survey/SurveyComponent";

const FirstSurveyReviewScreen = ({setStatus}) => {

    const testUserId = '1';

    //TODO take from db???
    const firstSurveyList = [
        {
            step: 1,
            questionId: 1
        },
        {
            step: 2,
            questionId: 2
        },
        {
            step: 3,
            questionId: 3
        },
        {
            step: 4,
            questionId: 4
        },
        {
            step: 5,
            questionId: 7
        },
        {
            step: 6,
            questionId: 8
        },
        {
            step: 7,
            questionId: 9
        },
        {
            step: 8,
            questionId: 10
        },
        {
            step: 9,
            questionId: 11
        },
        {
            step: 10,
            questionId: 12
        }
    ]

    return (
        <SurveyComponent
            userId={testUserId}
            surveyList={firstSurveyList}
            setStatus={setStatus}
        />
    )
}
export default FirstSurveyReviewScreen
