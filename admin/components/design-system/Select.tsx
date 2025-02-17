import React from "react";
import {
    Select as ShadcnSelect,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface SelectProps {
    placeholder: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
}

export default function Select({ placeholder, options, onChange }: SelectProps) {
    return (
        <ShadcnSelect onValueChange={onChange}>
            <SelectTrigger className="w-[180px] border-gray-300">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg rounded-md">
                <SelectGroup>
                    <SelectLabel className="text-gray-700 font-semibold px-2 py-1">Options</SelectLabel>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            className="hover:bg-gray-10 px-2 py-1 text-gray-900"
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </ShadcnSelect>
    );
}
