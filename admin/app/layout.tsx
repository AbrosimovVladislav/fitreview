import type {Metadata} from "next";
import "./globals.css";
import SideMenu from "@/components/design-system/SideMenu";
import Header from "@/components/design-system/Header";
import ClientProviders from "@/components/ClientProviders"; // Обёртка для клиентских задач

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Admin panel for managing FitReview.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="antialiased flex h-screen bg-gray-50">
        <ClientProviders>
            <SideMenu/>
            <div className="flex-1 flex flex-col">
                <Header/>
                <main className="p-6 flex-1 overflow-auto">{children}</main>
            </div>
        </ClientProviders>
        </body>
        </html>
    );
}
