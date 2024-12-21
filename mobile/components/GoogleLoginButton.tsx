import React, { useState } from 'react';
import Button from "@/components/common/Button";
// Ваш файл инициализации Firebase
import * as WebBrowser from 'expo-web-browser';

// Завершаем браузерные сессии на iOS/Android корректно
// WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = ({ onLoginSuccess }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePress = () => {
    };

    return (
        <Button
            title="Connect with Google"
            onPress={handlePress}
            containerStyles="mt-2"
            isLoading={isSubmitting}
            icon={'logo-google'}
        />
    )
}

export default GoogleLoginButton;
