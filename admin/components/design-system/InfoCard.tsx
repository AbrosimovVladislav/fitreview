"use client";

import React from "react";

interface InfoCardProps {
    title: string;
    value: string;
    imageUrl?: string;
}

export default function InfoCard({ title, value, imageUrl }: InfoCardProps) {
    return (
        <div className="flex items-center space-x-4 p-4 bg-white shadow rounded-md">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Info Image"
                    className="w-12 h-12 rounded-full object-cover"
                />
            )}
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-lg font-medium text-gray-800">{value}</p>
            </div>
        </div>
    );
}
