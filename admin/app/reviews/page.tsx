"use client";

import { useQuery } from "@tanstack/react-query";
import Table from "@/components/design-system/Table";
import { TableRowType } from "@/components/design-system/TableRow";
import {reviewApi} from "@/service/reviewApi";
import {IAdminShortReviewDto} from "@/interface/IAdminShortReviewDto";

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

    return (
        <div className="p-6">
            <Table tableHeads={tableHeads} tableRows={tableRows} />
        </div>
    );
}
