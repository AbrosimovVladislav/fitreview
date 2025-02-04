"use client";

import { usePathname } from "next/navigation";

export default function ReviewDetailsPage() {
    const pathname = usePathname();
    const id = pathname.split("/").pop();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Review Details: {id}</h1>
        </div>
    );
}
