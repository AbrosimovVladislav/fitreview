"use client";

import { createTelegramApp, TelegramAppProvider } from "@telegram-apps/sdk-react";
import React from "react";

// 1. Создаём экземпляр приложения
const telegramApp = createTelegramApp({
    enableLogging: true,
    // Здесь можно добавить другие настройки,
    // например, lang: "ru" и т.д.
});

// 2. Экспортируем компонент обёртку
export function TelegramProvider({ children }: { children: React.ReactNode }) {
    return (
        <TelegramAppProvider app={telegramApp}>
            {children}
        </TelegramAppProvider>
    );
}
