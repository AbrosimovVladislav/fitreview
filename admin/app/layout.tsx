import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import { IoAppsSharp, IoPersonCircleSharp } from "react-icons/io5"; // Иконки из Ionicons
import "./globals.css";

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Admin panel for managing FitReview.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <TooltipProvider>
            <body className="antialiased flex h-screen bg-gray-100">
            {/* Боковая панель */}
            <aside className="bg-gray-800 text-white w-64 flex flex-col p-4">
                {/* Логотип */}
                <div className="flex items-center mb-6">
                    <IoAppsSharp size={32} className="text-secondary" />
                    <h1 className="text-xl font-bold ml-3">FitReview</h1>
                </div>
                {/* Навигация */}
                <nav className="flex flex-col gap-4">
                    <Link
                        href="/"
                        className="hover:bg-gray-700 px-3 py-2 rounded text-md font-medium"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/reviews"
                        className="hover:bg-gray-700 px-3 py-2 rounded text-md font-medium"
                    >
                        Reviews
                    </Link>
                </nav>
            </aside>

            {/* Основной контент */}
            <div className="flex-1 flex flex-col">
                {/* Хедер */}
                <header className="bg-white p-4 shadow-md flex justify-between items-center">
                    <h2 className="text-lg font-bold">Admin Panel</h2>
                    {/* Иконка личного кабинета */}
                    <IoPersonCircleSharp size={32} className="text-gray-700" />
                </header>

                {/* Динамический контент */}
                <main className="p-6 flex-1 overflow-auto">{children}</main>
            </div>
            </body>
        </TooltipProvider>
        </html>
    );
}
