"use client";

import React from "react";
import Link from "next/link";
import { TableCell, TableRow as ShadcnTableRow } from "@/components/ui/table";

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



export default function TableRow({ cells }: TableRowProps) {
    return (
        <ShadcnTableRow>
            {cells.map((cell, index) => {
                switch (cell.type) {
                    case "string":
                        return <TableCell key={index}>{cell.value}</TableCell>;
                    case "image":
                        return (
                            <TableCell key={index}>
                                <img src={cell.value} alt="cell" className="w-8 h-8 rounded-full" />
                            </TableCell>
                        );
                    case "status":
                        return (
                            <TableCell key={index}>
                                <span
                                    className={`px-2 py-1 rounded ${
                                        cell.value === "In Progress"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-300 text-gray-700"
                                    }`}
                                >
                                    {cell.value}
                                </span>
                            </TableCell>
                        );
                    case "action":
                        return (
                            <TableCell key={index}>
                                <Link
                                    href={cell.value.href}
                                    className="bg-green-500 text-white px-2 py-1 rounded inline-block"
                                >
                                    {cell.value.label}
                                </Link>
                            </TableCell>
                        );
                    default:
                        return <TableCell key={index}>-</TableCell>;
                }
            })}
        </ShadcnTableRow>
    );
}
