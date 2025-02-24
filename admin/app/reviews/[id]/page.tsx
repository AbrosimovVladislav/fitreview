"use client";

import React, {useState} from "react";
import {usePathname} from "next/navigation";
import ReviewGeneralInfoArea from "@/components/review-details/ReviewGeneralInfoArea";
import AnswersArea from "@/components/review-details/AnswersArea";
import PhotosArea from "@/components/review-details/PhotosArea";
import AdditionalInfoArea from "@/components/review-details/AdditionalInfoArea";
import ReviewViewsFulfillmentArea from "@/components/review-details/ReviewViewsFulfillmentArea";
import GeneralEstimationArea from "@/components/review-details/GeneralEstimationArea";
import ReviewResultsArea from "@/components/review-details/ReviewResultsArea";
import {IAdminReviewDetailsDto} from "@/interface/interfaces";
import {reviewApi} from "@/service/reviewApi";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";

export default function ReviewDetailsPage() {
    const pathname = usePathname();
    const reviewId = pathname.split("/").pop();
    const queryClient = useQueryClient();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const {data, isLoading, isError} = useQuery<IAdminReviewDetailsDto>({
        queryKey: ["review", reviewId],
        queryFn: () => reviewApi.getReviewById(reviewId!),
        enabled: !!reviewId,
    });

    const submitReviewMutation = useMutation({
        mutationFn: () => reviewApi.submitReview(Number(reviewId!)),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["review", reviewId]}); // Обновляем кэш данных
            setDialogOpen(false);
        },
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

            <div className='flex gap-6'>
                <ReviewGeneralInfoArea
                    userData={{
                        userName: data.userName,
                        userEmail: data.userEmail,
                        creationDate: data.creationDate,
                    }}
                    status={data.status}
                />
                <AnswersArea answers={data.answers || []}/>
            </div>

            <PhotosArea photos={data.photos || []}/>
            <AdditionalInfoArea/>

            <ReviewViewsFulfillmentArea bodySegments={data.bodySegments} reviewId={Number(reviewId)}/>

            <GeneralEstimationArea
                data={{estimation: data.estimation, fatIndex: data.fatIndex}}
                reviewId={Number(reviewId)}
            />

            <ReviewResultsArea reviewId={Number(reviewId)} results={data.reviewResultsItems}/>

            {/* Кнопка Submit Review */}
            <div className="flex justify-end mt-6">
                <Button
                    variant="default"
                    onClick={() => setDialogOpen(true)}
                    disabled={data.status === "ReviewResults"}
                >
                    Submit Review
                </Button>
            </div>


            {/* Диалог подтверждения */}
            <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="max-w-lg bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold text-center text-gray-900">
                            Confirm Submission
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-600 mt-2">
                            Are you sure you want to submit this review to the client?
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex mt-4">
                        <div className='flex gap-4'>
                            <Button
                                variant="destructive"
                                onClick={() => setDialogOpen(false)}
                                className="w-36 h-12 bg-red-600 text-white hover:bg-red-700"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => submitReviewMutation.mutate()}
                                disabled={submitReviewMutation.isPending}
                                className="w-36 h-12 bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
                            >
                                Yes, Submit
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>


        </div>
    );
}
