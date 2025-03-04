"use client";

import { useEffect, useState } from "react";

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<{ id: number; first_name: string } | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();

            const initData = window.Telegram.WebApp.initDataUnsafe;
            if (initData?.user) {
                setUser(initData.user);
            }
        }
    }, []);

    return (
        <div>
            {user ? <p>Привет, {user.first_name}!</p> : <p>Загрузка...</p>}
            {children}
        </div>
    );
}
