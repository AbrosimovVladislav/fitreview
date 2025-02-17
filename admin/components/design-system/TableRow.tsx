"use client";

import React from "react";
import Link from "next/link";
import {TableCell, TableRow as ShadcnTableRow} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { IoHammerOutline } from "react-icons/io5"; // Иконка из Ionicons

// Типы ячеек
export type TableCellString = { type: "string"; value: string };
export type TableCellImage = { type: "image"; value: string };
export type TableCellLabel = { type: "status"; value: string };
export type TableCellAction = { type: "action"; value: { href: string; label: string } };

export type CellType = TableCellString | TableCellImage | TableCellLabel | TableCellAction;

// Интерфейс строки
export interface TableRowType {
    id: string | number;
    cells: CellType[];
}

// Интерфейс для компонента TableRow
export interface TableRowProps {
    cells: CellType[];
}

export default function TableRow({cells}: TableRowProps) {

    function getStatusClass(status: string): string {
        switch (status) {
            case "WelcomeScreen":
                return "bg-gradient-to-r from-orange-400 to-orange-600 text-white";
            case "PaymentScreen":
                return "bg-gradient-to-r from-orange-400 via-yellow-400 to-yellow-600 text-white";
            case "FirstSurvey":
                return "bg-gradient-to-r from-yellow-400 via-blue-400 to-blue-600 text-white";
            case "WaitingForResults":
                return "bg-gradient-to-r from-blue-400 via-green-400 to-green-600 text-white";
            case "ReviewResults":
                return "bg-gradient-to-r from-green-400 to-green-600 text-white";
            default:
                return "bg-gray-300 text-gray-700";
        }
    }

    return (
        <ShadcnTableRow className="hover:bg-gray-10 transition-colors">
            {cells.map((cell, index) => {
                switch (cell.type) {
                    case "string":
                        return <TableCell key={index}
                                          className='font-regular text-black-100 text-md'>{cell.value}</TableCell>;
                    case "image":
                        return (
                            <TableCell key={index}>
                                <img src={cell.value} alt="cell" className="w-8 h-8 rounded-full"/>
                            </TableCell>
                        );
                    case "status":
                        return (
                            <TableCell key={index}>
                                <span className={`px-2 py-1 font-bold rounded ${getStatusClass(cell.value)}`}>
                                    {cell.value}
                                </span>
                            </TableCell>
                        );
                    case "action":
                        return (
                            <TableCell key={index} >
                                <Tooltip delayDuration={300}>
                                    <TooltipTrigger asChild>
                                        <Link href={cell.value.href} className="text-gray-400 hover:text-orange-500">
                                            <IoHammerOutline size={28} />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-black text-white p-2 rounded text-sm shadow">
                                        {cell.value.label}
                                    </TooltipContent>
                                </Tooltip>
                            </TableCell>
                        );
                    default:
                        return <TableCell key={index}>-</TableCell>;
                }
            })}
        </ShadcnTableRow>
    );
}
