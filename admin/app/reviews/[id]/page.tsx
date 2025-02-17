"use client";

import React from "react";
import {usePathname} from "next/navigation";
import UserGeneralInfoArea from "@/components/review-details/UserGeneralInfoArea";
import AnswersArea from "@/components/review-details/AnswersArea";
import PhotosArea from "@/components/review-details/PhotosArea";
import AdditionalInfoArea from "@/components/review-details/AdditionalInfoArea";
import ReviewViewsFulfillmentArea from "@/components/review-details/ReviewViewsFulfillmentArea";
import GeneralEstimationArea from "@/components/review-details/GeneralEstimationArea";
import ReviewResultsArea from "@/components/review-details/ReviewResultsArea";
import {IAdminReviewDetailsDto} from "@/interface/interfaces";
import {reviewApi} from "@/service/reviewApi";
import {useQuery} from "@tanstack/react-query";

export default function ReviewDetailsPage() {
    const pathname = usePathname();
    const reviewId = pathname.split("/").pop();

    const {data, isLoading, isError} = useQuery<IAdminReviewDetailsDto>({
        queryKey: ["review", reviewId],
        queryFn: () => reviewApi.getReviewById(reviewId!),
        enabled: !!reviewId,
    });

    if (isLoading) {
        return <p className="text-center text-gray-500">Loading review details...</p>;
    }

    if (isError || !data) {
        return <p className="text-center text-red-500">Error loading review details.</p>;
    }

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold mb-4">Review Details: {reviewId}</h1>

            <UserGeneralInfoArea
                userData={{
                    userName: data.userName,
                    userEmail: data.userEmail,
                    creationDate: data.creationDate,
                }}
            />
            <AnswersArea answers={data.answers || []}/>
            <PhotosArea photos={data.photos || []}/>
            <AdditionalInfoArea/>

            <ReviewViewsFulfillmentArea bodySegments={data.bodySegments} reviewId={Number(reviewId)}/>

            <GeneralEstimationArea
                data={{estimation: data.estimation, fatIndex: data.fatIndex}}
                reviewId={Number(reviewId)}
            />

            <ReviewResultsArea reviewId={Number(reviewId)} results={data.reviewResultsItems}/>
        </div>
    );
}
