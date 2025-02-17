import React, { ReactNode } from "react";
import { IoAppsSharp, IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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
        <div className="bg-gray-800 text-white w-20 flex flex-col items-center space-y-4">
            {/* Логотип */}
            <Link href="/" className="py-3 px-5 border-b border-orange-1001">
                <img
                    src="/fr_admin_logo.png"
                    alt="Logo"
                    className="w-10 h-10 object-contain cursor-pointer"
                />
            </Link>

            {/* Навигация */}
            <nav className="flex pt-2 flex-col space-y-4">
                {menuItems.map((item, index) => (
                    <Tooltip key={index} delayDuration={150}>
                        <TooltipTrigger asChild>
                            <Link
                                href={item.href}
                                className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-600"
                            >
                                {item.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            side="right"
                            align="center"
                            className="bg-gray-900 text-white text-sm px-2 py-1 rounded shadow-lg"
                        >
                            {item.label}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </nav>
        </div>
    );
}
