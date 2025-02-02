import type {Metadata} from "next";
import "./globals.css";
import {TooltipProvider} from "@radix-ui/react-tooltip";
import SideMenu from "@/components/design-system/SideMenu";
import Header from "@/components/design-system/Header";


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
            <body className="antialiased flex h-screen bg-gray-50">

            <SideMenu/>

            <div className="flex-1 flex flex-col">
                <Header/>

                <main className="p-6 flex-1 overflow-auto">
                    {children}
                </main>
            </div>

            </body>
        </TooltipProvider>
        </html>
    );
}
