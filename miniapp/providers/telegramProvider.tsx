"use client";

import { useEffect } from "react";
import { initData, useSignal } from "@telegram-apps/sdk-react";
import { useTelegramStore } from "@/store/telegramStore";
import { validateTelegramAuth } from "@/utils/validateTelegramAuth";

export function TelegramProvider({ children }: { children: React.ReactNode }) {
    const { setUser } = useTelegramStore();

    const initDataRaw = useSignal(initData.raw);
    const initDataState = useSignal(initData.state);

    useEffect(() => {
        const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

        if (!botToken) {
            console.error("Ошибка: NEXT_PUBLIC_TELEGRAM_BOT_TOKEN не задан в .env.local");
            return;
        }

        if (initDataState) {
            const isValid = validateTelegramAuth(initDataRaw || "", botToken);

            setUser(
                initDataState.user
                    ? {
                        id: initDataState.user.id,
                        username: initDataState.user.username,
                        first_name: initDataState.user.firstName,
                        last_name: initDataState.user.lastName,
                        is_premium: initDataState.user.isPremium,
                    }
                    : null,
                initDataRaw || "",
                isValid
            );
        }
    }, [initDataState, initDataRaw, setUser]);

    return <>{children}</>;
}
