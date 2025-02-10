"use client";

import React, { useState } from "react";

interface SegmentProps {
    title: string;
    description: string;
    imageUrl?: string;
    onUpload: (file: File) => void;
    onLinkClick: () => void;
}

export default function BodySegmentComponent({
                                                 title,
                                                 description,
                                                 imageUrl,
                                                 onUpload,
                                                 onLinkClick,
                                             }: SegmentProps) {
    const [comment, setComment] = useState(description);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onUpload(e.target.files[0]);
        }
    };

    return (
        <div className="border p-4 rounded-md flex flex-col space-y-4">
            {/* Заголовок */}
            <h2 className="text-lg font-semibold">{title}</h2>

            {/* Текстовое поле с описанием */}
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border rounded-md p-2 text-gray-700 w-full"
                rows={3}
            />

            {/* Зона с изображением */}
            <div className="flex flex-col items-center space-y-2">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Segment"
                        className="w-32 h-32 object-cover rounded-md"
                    />
                ) : (
                    <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-md">
                        <span>No Image</span>
                    </div>
                )}
                <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                    Upload
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        className="hidden"
                    />
                </label>
                <button
                    onClick={onLinkClick}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    i
                </button>
            </div>
        </div>
    );
}
