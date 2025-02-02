import Table from "@/components/design-system/Table";
import { TableRowType } from "@/components/design-system/TableRow";

const tableHeads = [
    { label: "Review ID" },
    { label: "Client Name" },
    { label: "Client Email" },
    { label: "Status" },
    { label: "Actions" },
];

const tableRows: TableRowType[] = [
    {
        id: 1,
        cells: [
            { type: "string", value: "1" },
            { type: "string", value: "Admin" },
            { type: "string", value: "fitreview24@gmail.com" },
            { type: "label", value: "ReviewResults" },
            { type: "action", value: { href: "/reviews/1", label: "View" } },
        ],
    },
    {
        id: 2,
        cells: [
            { type: "string", value: "2" },
            { type: "string", value: "Vlad" },
            { type: "string", value: "abrosimov94vladislav@gmail.com" },
            { type: "label", value: "FirstSurvey" },
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
