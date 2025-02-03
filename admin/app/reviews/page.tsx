"use client";

import { useQuery } from "@tanstack/react-query";
import Table from "@/components/design-system/Table";
import { TableRowType } from "@/components/design-system/TableRow";
import {reviewApi} from "@/service/reviewApi";
import {IAdminShortReviewDto} from "@/interface/IAdminShortReviewDto";
import Select from "@/components/design-system/Select";

export default function ReviewsPage() {
    const { data, isLoading, isError } = useQuery<IAdminShortReviewDto[]>({
        queryKey: ["reviews"],
        queryFn: reviewApi.getReviews,
    });


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading reviews</p>;

    const tableHeads = [
        { label: "Review ID" },
        { label: "Client Name" },
        { label: "Client Email" },
        { label: "Status" },
        { label: "Date" },
        { label: "Actions" },
    ];

    const tableRows: TableRowType[] = data.map((review) => ({
        id: String(review.id),
        cells: [
            { type: "string", value: review.id },
            { type: "string", value: review.name },
            { type: "string", value: review.email },
            { type: "status", value: review.status },
            { type: "string", value: review.date },
            { type: "action", value: { href: `/reviews/${review.id}`, label: "View" } },
        ],
    }));

    const sortingOptions = [
        { label: "Sort By: Review Id", value: "id" },
        { label: "Sort By: Status", value: "status" },
        { label: "Sort By: Date", value: "date" },
    ];

    const mockHandleSorting = (value: string) => {
        console.log("Sorting value:", value);
    };

    return (
        <div className="pt-3 px-6">
            <div id='table-controls' className='flex justify-between items-center pb-6'>
                <div className='font-bold'>Total: {24} reviews</div>
                <Select
                    placeholder="Sort By"
                    options={sortingOptions}
                    onChange={mockHandleSorting}
                />
            </div>
            <Table tableHeads={tableHeads} tableRows={tableRows}/>
        </div>
    );
}
