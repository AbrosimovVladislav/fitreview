"use client";

import React from "react";
import {
    Table as ShadcnTable,
    TableBody,
    TableHead,
    TableHeader,
    TableRow as ShadcnTableRow
} from "@/components/ui/table";
import TableRow, {TableRowType} from "@/components/design-system/TableRow";

export interface TableProps {
    tableHeads: { label: string }[];
    tableRows: TableRowType[]; // Используем TableRowType
}

export default function Table({tableHeads, tableRows}: TableProps) {
    return (
        <div className="overflow-x-auto">
            <ShadcnTable>
                {/* Заголовки таблицы */}
                <TableHeader>
                    <ShadcnTableRow>
                        {tableHeads.map((head, index) => (
                            <TableHead key={index} className='font-montserrat font-medium text-gray-700 text-md'>
                                {head.label}
                            </TableHead>
                        ))}
                    </ShadcnTableRow>
                </TableHeader>

                {/* Строки таблицы */}
                <TableBody>
                    {tableRows.map((row) => (
                        <TableRow key={row.id} cells={row.cells}/>
                    ))}
                </TableBody>
            </ShadcnTable>
        </div>
    );
}
