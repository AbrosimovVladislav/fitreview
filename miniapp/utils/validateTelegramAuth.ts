import crypto from "crypto";

export function validateTelegramAuth(initDataRaw: string, botToken: string): boolean {
    if (!initDataRaw || !botToken) {
        return false;
    }

    try {
        const params = new URLSearchParams(initDataRaw);
        const hash = params.get("hash");
        params.delete("hash");

        if (!hash) {
            return false;
        }

        // 1. Формируем строку для проверки
        const dataCheckString = [...params.entries()]
            .map(([key, value]) => `${key}=${value}`)
            .sort()
            .join("\n");

        // 2. Создаём ключ HMAC-SHA256 на основе bot_token
        const secretKey = crypto.createHmac("sha256", "WebAppData").update(botToken).digest();

        // 3. Генерируем хэш для строки `dataCheckString`
        const computedHash = crypto.createHmac("sha256", secretKey).update(dataCheckString).digest("hex");

        // 4. Сравниваем с переданным хэшем
        const result = computedHash === hash
        console.log(result && "Validated successfully for: " + params);
        return result;
    } catch (error) {
        console.error("Ошибка при проверке хэша Telegram:", error);
        return false;
    }
}
