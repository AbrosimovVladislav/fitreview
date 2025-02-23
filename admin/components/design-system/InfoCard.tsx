"use client";

import React from "react";

interface InfoCardProps {
    title: string;
    value: string;
    imageUrl?: string;
}

// Функция для форматирования даты в "DD.MM.YYYY HH:mm"
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Если не дата — возвращаем как есть

    return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${date.getFullYear()} ${date.getHours()
        .toString()
        .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
};

export default function InfoCard({ title, value, imageUrl }: InfoCardProps) {
    const formattedValue = formatDate(value);

    return (
        <div className="flex items-center space-x-4 p-4">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Info Image"
                    className="w-12 h-12 rounded-full object-cover"
                />
            )}
            <div>
                <p className="text-sm text-gray-10">{title}</p>
                <p className="text-lg font-medium text-gray-1">{formattedValue}</p>
            </div>
        </div>
    );
}
