import React from "react";
import {IAdminReviewResultsItemDto} from "@/interface/interfaces";
import {InvalidateQueryFilters, useQueryClient} from "@tanstack/react-query";
import {reviewApi} from "@/service/reviewApi";
import ReviewResultsItem from "@/components/review-details/ReviewResultsItem";
import {Accordion} from "@radix-ui/react-accordion";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

interface ReviewResultsAreaProps {
    reviewId: number;
    results: IAdminReviewResultsItemDto[];
}

export default function ReviewResultsArea({reviewId, results}: ReviewResultsAreaProps) {
    const queryClient = useQueryClient();

    const categories = [
        {type: "problem", title: "Main Problems", color: "bg-yellow-500", textColor: "text-yellow-300"},
        {type: "objective", title: "Training Objective", color: "bg-red-500", textColor: "text-red-300"},
        {type: "recommendation", title: "Recommendations", color: "bg-blue-500", textColor: "text-blue-300"}
    ];

    const handleSave = async (updatedItem: IAdminReviewResultsItemDto) => {
        if (!updatedItem.id) return; // <-- Пропускаем, если нет ID
        await reviewApi.saveReviewResultsItem(updatedItem);
        await queryClient.invalidateQueries(["review", reviewId] as unknown as InvalidateQueryFilters);
    };

    const handleDelete = async (id: number) => {
        try {
            await reviewApi.deleteReviewResultsItem(id);
            await queryClient.invalidateQueries(["review", reviewId] as unknown as InvalidateQueryFilters);
        } catch (error) {
            console.error("Failed to delete review item:", error);
        }
    };

    const handleAddNewItem = async (type: string) => {
        try {
            const newItem: IAdminReviewResultsItemDto = {
                reviewId,
                title: "New Item",
                description: "",
                estimation: 0,
                iconType: "default",
                type
            };

            const savedItem = await reviewApi.saveReviewResultsItem(newItem);

            // Проверяем, что сервер вернул ID
            if (!savedItem.id) {
                throw new Error("Server did not return ID for the new item.");
            }

            await queryClient.invalidateQueries(["review", reviewId] as unknown as InvalidateQueryFilters);
        } catch (error) {
            console.error("Failed to add new review item:", error);
        }
    };


    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="review-results">
                <AccordionTrigger>Review Results</AccordionTrigger>
                <AccordionContent>
                    <div className="space-y-6">
                        {categories.map(({type, title, color, textColor}) => {
                            const filteredResults = results.filter((item) => item.type === type);

                            return (
                                <div key={type} className="bg-gray-900 p-4 rounded-lg">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold text-white">{title.toUpperCase()}</h2>
                                        <button
                                            onClick={() => handleAddNewItem(type)}
                                            className="bg-gray-700 text-white px-3 py-1 rounded-full text-lg"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        {filteredResults.map((item) => (
                                            <ReviewResultsItem
                                                key={item.id}
                                                item={item}
                                                color={color}
                                                textColor={textColor}
                                                onSave={handleSave}
                                                onDelete={handleDelete}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
