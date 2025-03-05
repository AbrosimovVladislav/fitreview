'use client';

import {Page} from '@/components/Page';
import {useEffect} from "react";
import {useTelegramStore} from "@/store/telegramStore";

export default function Home() {

    const { user, isValid } = useTelegramStore();

    // const initDataRaw = useSignal(initData.raw);
    // const initDataState = useSignal(initData.state);

    useEffect(() => {
        // const user = initDataState && initDataState.user && getUserRows(initDataState.user);
        console.log(user)
    }, [user])

    return (
        <Page back={false}>

        </Page>
    );
}