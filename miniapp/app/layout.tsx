import type {PropsWithChildren} from 'react';
import type {Metadata} from 'next';

import {Root} from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';
import {TelegramProvider} from "@/providers/telegramProvider";

export const metadata: Metadata = {
    title: 'Your Application Title Goes Here',
    description: 'Your application description goes here',
};

export default async function RootLayout({children}: PropsWithChildren) {

    console.log("TOKEN:", process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN);

    return (
        <html lang="en">
        <body>
        <TelegramProvider>
            <Root>
                {children}
            </Root>
        </TelegramProvider>
        </body>
        </html>
    );
}
