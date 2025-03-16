"use client";

import { create } from "zustand";

interface TelegramState {
    user: {
        id: number;
        username?: string;
        first_name?: string;
        last_name?: string;
        is_premium?: boolean;
    } | null;
    initDataRaw: string | null;
    isValid: boolean;
    setUser: (user: TelegramState["user"], initDataRaw: string, isValid: boolean) => void;
}

export const useTelegramStore = create<TelegramState>((set) => ({
    user: null,
    initDataRaw: null,
    isValid: false,
    setUser: (user, initDataRaw, isValid) =>
        set({ user, initDataRaw, isValid }),
}));
