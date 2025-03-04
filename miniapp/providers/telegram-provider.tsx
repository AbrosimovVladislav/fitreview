"use client";

import { useEffect, useState } from "react";

export default function TelegramProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const [debugData, setDebugData] = useState<string>("Loading...");

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();

            const initData = window.Telegram.WebApp.initDataUnsafe;
            setDebugData("Debug Zone" + JSON.stringify(initData, null, 2));

            if (initData?.user) {
                setUser(initData.user);
            }
        }
    }, []);

    return (
        <div>
            {user ? <p>Привет, {user.first_name}!</p> : <p>Загрузка...</p>}
            <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap", background: "#000", color: "#fff", padding: "10px" }}>
                {debugData}
            </pre>
            {children}
        </div>
    );
}
