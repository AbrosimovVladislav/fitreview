import { IAdminReviewResultsItemDto } from "@/interface/interfaces";
import { useEffect, useState } from "react";

interface ReviewResultsItemProps {
    item: IAdminReviewResultsItemDto;
    color: string;
    textColor: string;
    onSave: (item: IAdminReviewResultsItemDto) => Promise<void>;
    onDelete: (id: number) => Promise<void>;  // Новый пропс для удаления
}

export default function ReviewResultsItem({ item, color, textColor, onSave, onDelete }: ReviewResultsItemProps) {
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [estimation, setEstimation] = useState(item.estimation);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                title !== item.title ||
                description !== item.description ||
                estimation !== item.estimation
            ) {
                setSaving(true);
                onSave({ ...item, title, description, estimation }).finally(() => setSaving(false));
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, [title, description, estimation]);

    return (
        <div className="flex items-start space-x-4 bg-gray-800 p-3 rounded-lg relative">
            {/* Оценка */}
            {"problem" === item.type && (
                <div className={`${color} w-12 h-12 flex items-center justify-center rounded-full`}>
                    <input
                        type="number"
                        value={estimation}
                        onChange={(e) => setEstimation(Number(e.target.value))}
                        className="bg-transparent text-white text-lg font-bold w-10 text-center border-none outline-none"
                    />
                    <span className="text-white">%</span>
                </div>
            )}

            {/* Основное содержимое */}
            <div className="flex-1">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={`font-bold uppercase bg-transparent border-none outline-none ${textColor} w-full`}
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent border border-gray-600 p-2 rounded-md text-gray-300"
                    rows={2}
                />
                <span className="text-xs text-gray-400">{saving ? "Saving..." : "Saved"}</span>
            </div>

            {/* Кнопка удаления */}
            <button
                onClick={() => onDelete(item.id)}
                className="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full"
            >
                ×
            </button>
        </div>
    );
}
