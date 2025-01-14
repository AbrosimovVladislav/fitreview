import { Table } from "@mantine/core";
import {ReviewItem} from "@/components/ReviewItem";

export default function ReviewsPage() {
    const reviews = [
        { id: "00001", name: "John Doe", date: "2024-12-25", status: "Completed" },
        { id: "00002", name: "Jane Smith", date: "2024-12-26", status: "Processing" },
        { id: "00003", name: "Mark Brown", date: "2024-12-27", status: "Rejected" },
    ];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Reviews</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <Table highlightOnHover withBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Date</Table.Th>
                            <Table.Th>Status</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {reviews.map((review) => (
                            <ReviewItem
                                key={review.id}
                                id={review.id}
                                name={review.name}
                                date={review.date}
                                status={review.status}
                            />
                        ))}
                    </Table.Tbody>
                </Table>
            </div>
        </div>
    );
}
