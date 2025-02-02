import Table, { TableRowType } from "@/components/design-system/Table";

const tableHeads = [
    { label: "Review ID" },
    { label: "Client Name" },
    { label: "Status" },
    { label: "Actions" },
];

const tableRows: TableRowType[] = [
    {
        id: 1,
        cells: [
            { type: "string", value: "1" },
            { type: "string", value: "John Doe" },
            { type: "label", value: "In Progress" },
            { type: "action", value: { href: "/reviews/1", label: "View" } },
        ],
    },
    {
        id: 2,
        cells: [
            { type: "string", value: "2" },
            { type: "string", value: "Jane Smith" },
            { type: "label", value: "Closed" },
            { type: "action", value: { href: "/reviews/2", label: "View" } },
        ],
    },
];

export default function ReviewsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Reviews</h1>
            <Table tableHeads={tableHeads} tableRows={tableRows} />
        </div>
    );
}
