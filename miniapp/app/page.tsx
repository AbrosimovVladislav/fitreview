"use client";

import React, { useEffect } from "react";
import { useTelegram } from "@telegram-apps/sdk-react";

export default function HomePage() {
    // Хук даст нам доступ к WebApp
    const { WebApp } = useTelegram();

    useEffect(() => {
        if (!WebApp) return;

        // Показываем основную кнопку WebApp
        WebApp.MainButton.show();
        WebApp.MainButton.setText("Нажми меня!");

        // Пример — логируем юзера в консоль
        console.log("Current user:", WebApp.initDataUnsafe?.user);
    }, [WebApp]);

    // Если WebApp ещё не инициализировался, пока покажем "Loading..."
    if (!WebApp) {
        return <div>Loading...</div>;
    }

    // Достаём данные пользователя из initDataUnsafe
    const { user } = WebApp.initDataUnsafe;

    return (
        <div>
            <h1>Home Page</h1>
            <p>Username: {user?.username}</p>
            <p>First Name: {user?.first_name}</p>
            <p>Last Name: {user?.last_name}</p>
            <p>ID: {user?.id}</p>
        </div>
    );
}
