"use client";

import React, {useEffect, useState} from "react";
import { IAdminBodySegmentDto } from "@/interface/interfaces";
import { reviewApi } from "@/service/reviewApi";
import { useQueryClient } from "@tanstack/react-query";

interface SegmentProps {
    reviewId: number,
    segment: IAdminBodySegmentDto;
}

export default function BodySegmentComponent({reviewId, segment }: SegmentProps) {
    const [description, setDescription] = useState(segment.description ?? "Insert your description here");
    const [status, setStatus] = useState<"saved" | "changed" | "saving">("saved");
    const [loading, setLoading] = useState<"userImage" | "diagramImage" | null>(null);
    const queryClient = useQueryClient(); // Доступ к кэшу query

    // Таймер для дебаунса
    useEffect(() => {
        if (status === "changed") {
            const timer = setTimeout(async () => {
                setStatus("saving");
                try {
                    await reviewApi.saveBodySegmentDescription(segment.id, reviewId, description);
                    setStatus("saved");
                    await queryClient.invalidateQueries(["review"]);
                } catch (error) {
                    console.error("Failed to save description:", error);
                }
            }, 2000); // Ждем 2 секунды после ввода
            return () => clearTimeout(timer); // Очистка таймера при изменении
        }
    }, [description]);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, imageType: "userImage" | "diagramImage") => {
        if (e.target.files && e.target.files[0]) {
            setLoading(imageType);
            try {
                await reviewApi.uploadBodySegmentImage(segment.id, reviewId, e.target.files[0], imageType);
                await queryClient.invalidateQueries(["review"]); // Перезапрос всего ревью
            } catch (error) {
                console.error(`Image upload failed for ${imageType}:`, error);
            } finally {
                setLoading(null);
            }
        }
    };

    return (
        <div className="border p-4 rounded-md flex flex-col space-y-4 bg-gray-1">
            <h2 className="text-lg font-semibold">[Id: {segment.id}] {segment.name}</h2>
            <h2 className="text-lg font-semibold text-yellow-600">{segment.title}</h2>

            {/* Описание (Description) */}
            <div className="relative">
                <textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        setStatus("changed"); // Меняем статус на "changed" при вводе
                    }}
                    className="border rounded-md p-2 text-gray-700 w-full"
                    rows={3}
                />
                <span className={`absolute bottom-2 right-2 text-sm ${status === "saved" ? "text-green-600" : "text-yellow-600"}`}>
                    {status === "saving" ? "Saving..." : status === "changed" ? "Changed" : "Saved"}
                </span>
            </div>

            {/* Зона с изображениями */}
            <div className="grid grid-cols-2 gap-4">
                {/* User Image */}
                <div className="flex flex-col items-center space-y-2">
                    {loading === "userImage" ? (
                        <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-md animate-pulse">
                            <span>Uploading...</span>
                        </div>
                    ) : segment.userImage ? (
                        <img src={segment.userImage} alt="User" className="w-32 h-32 object-cover rounded-md" />
                    ) : (
                        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md">
                            <span>No User Image</span>
                        </div>
                    )}

                    <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                        Upload User Image
                        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, "userImage")} className="hidden" />
                    </label>
                </div>

                {/* Diagram Image */}
                <div className="flex flex-col items-center space-y-2">
                    {loading === "diagramImage" ? (
                        <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-md animate-pulse">
                            <span>Uploading...</span>
                        </div>
                    ) : segment.diagramImage ? (
                        <img src={segment.diagramImage} alt="Diagram" className="w-32 h-32 object-cover rounded-md" />
                    ) : (
                        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md">
                            <span>No Diagram Image</span>
                        </div>
                    )}

                    <label className="bg-yellow-600 text-white px-4 py-2 rounded cursor-pointer">
                        Upload Diagram Image
                        <input type="file" accept="image/*" onChange={(e) => handleUpload(e, "diagramImage")} className="hidden" />
                    </label>
                </div>
            </div>
        </div>
    );
}
