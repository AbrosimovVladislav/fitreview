import React, {useEffect} from 'react'
import {SplashScreen, Stack} from 'expo-router'
import {useFonts} from 'expo-font'
import GlobalProvider from '../context/GlobalProvider'
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "BebasNeue-Regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
        "BebasNeue-Cyrillic": require("../assets/fonts/BebasNeue-Cyrillic.ttf"),
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
        "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-Thin": require("../assets/fonts/Montserrat-Thin.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;

    return (
        <GlobalProvider>
            <NativeBaseProvider>
                <Stack>
                    <Stack.Screen name='index' options={{headerShown: false}}/>
                    <Stack.Screen name='(auth)' options={{headerShown: false}}/>
                    <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
                    <Stack.Screen name='(region)' options={{headerShown: false}}/>
                    <Stack.Screen name='exercise/[exerciseId]' options={{headerShown: false}}/>
                    <Stack.Screen name='review/payment' options={{headerShown: false}}/>
                </Stack>
            </NativeBaseProvider>
        </GlobalProvider>
    )
}
export default RootLayout
