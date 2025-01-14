import { Badge, Table } from "@mantine/core";

interface ReviewItemProps {
    id: string;
    name: string;
    date: string;
    status: string;
}

const statusColors: Record<string, string> = {
    Completed: "green",
    Processing: "yellow",
    Rejected: "red",
};

export function ReviewItem({ id, name, date, status }: ReviewItemProps) {
    return (
        <Table.Tr>
            <Table.Td>{id}</Table.Td>
            <Table.Td>{name}</Table.Td>
            <Table.Td>{date}</Table.Td>
            <Table.Td>
                <Badge color={statusColors[status]} variant="light">
                    {status}
                </Badge>
            </Table.Td>
        </Table.Tr>
    );
}
