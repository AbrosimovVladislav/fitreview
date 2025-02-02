import React, {ReactNode} from 'react'
import {IoAppsSharp, IoDocumentText} from "react-icons/io5";
import Link from "next/link";

interface MenuItem {
    href: string;
    icon: ReactNode;
    label: string;
}

export const menuItems: MenuItem[] = [
    { href: "/", icon: <IoAppsSharp size={24} />, label: "Dashboard" },
    { href: "/reviews", icon: <IoDocumentText size={24} />, label: "Reviews" },
];

export default function SideMenu() {
    return (
        <div className="bg-gray-800 text-white w-20 flex flex-col items-center py-4 space-y-4">
            {/* Логотип */}
            <div className="mb-6">
                <IoAppsSharp size={32} className="text-secondary"/>
            </div>

            {/* Меню */}
            <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="group relative flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-600"
                    >
                        {item.icon}
                        <span
                            className="absolute left-16 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition">
                  {item.label}
                </span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}
