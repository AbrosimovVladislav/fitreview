"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoPersonCircleSharp } from "react-icons/io5";
import {menuItems} from "@/components/design-system/SideMenu";

export default function Header() {
    const [title, setTitle] = useState("Dashboard");
    const pathname = usePathname();

    useEffect(() => {
        // Определяем заголовок на основе текущего пути
        const currentMenuItem = menuItems.find((item) => item.href === pathname);
        setTitle(currentMenuItem ? currentMenuItem.label : "Page");
    }, [pathname]);

    return (
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
            <h2 className="text-lg font-bold">{title}</h2>
            <IoPersonCircleSharp size={32} className="text-gray-700" />
        </header>
    );
}
