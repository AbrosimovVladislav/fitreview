"use client";

import { useEffect, useState } from "react";

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const [debug, setDebug] = useState<string>("");

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();

            const initData = window.Telegram.WebApp.initDataUnsafe;
            setDebug(JSON.stringify(initData, null, 2)); // Выводим JSON на экран

            if (initData?.user) {
                setUser(initData.user);
            }
        }
    }, []);

    return (
        <div>
            {user ? <p>Привет, {user.first_name}!</p> : <p>Загрузка...</p>}
            <pre style={{ fontSize: "10px", whiteSpace: "pre-wrap" }}>{debug}</pre>
            {children}
        </div>
    );
}
