import "./globals.css";
import { Inter } from "next/font/google";
import {TelegramProvider} from "@/providers/telegram-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next Telegram MiniApp",
    description: "Testing Telegram MiniApp integration",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/* Оборачиваем всё приложение в TelegramProvider */}
        <TelegramProvider>
            {children}
        </TelegramProvider>
        </body>
        </html>
    );
}
