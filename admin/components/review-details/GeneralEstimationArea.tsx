import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { reviewApi } from "@/service/reviewApi";
import { Accordion } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface GeneralEstimationAreaProps {
    reviewId: number;
    data: { estimation: number | null; fatIndex: string | null };
}

export default function GeneralEstimationArea({ reviewId, data }: GeneralEstimationAreaProps) {
    const queryClient = useQueryClient();
    const [isSaved, setIsSaved] = useState(true);

    const handleUpdateEstimation = async (value: number) => {
        setIsSaved(false);
        await reviewApi.updateReviewEstimation(reviewId, value);
        await queryClient.invalidateQueries(["review", reviewId]); // Обновляем кэш
        setIsSaved(true);
    };

    const handleUpdateFatIndex = async (value: string) => {
        setIsSaved(false);
        await reviewApi.updateReviewFatIndex(reviewId, value);
        await queryClient.invalidateQueries(["review", reviewId]); // Обновляем кэш
        setIsSaved(true);
    };

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="general-estimation">
                <AccordionTrigger>General Estimation</AccordionTrigger>
                <AccordionContent>
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-white">General Estimation</h2>
                            <span className={`text-sm ${isSaved ? "text-green-400" : "text-yellow-400"}`}>
                                {isSaved ? "Saved" : "Saving..."}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-white block mb-1">Overall Functional Estimation</label>
                                <input
                                    type="number"
                                    defaultValue={data.estimation ?? ""}
                                    onBlur={(e) => handleUpdateEstimation(Number(e.target.value))}
                                    className="bg-transparent border border-gray-600 p-2 rounded-md text-white w-full"
                                />
                            </div>

                            <div>
                                <label className="text-white block mb-1">Fat Index</label>
                                <input
                                    type="text"
                                    defaultValue={data.fatIndex ?? ""}
                                    onBlur={(e) => handleUpdateFatIndex(e.target.value)}
                                    className="bg-transparent border border-gray-600 p-2 rounded-md text-white w-full"
                                />
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
