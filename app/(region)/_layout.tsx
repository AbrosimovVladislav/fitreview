import React from 'react'
import {Stack} from 'expo-router'
import {StatusBar} from "expo-status-bar";

const RegionLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="upper-body"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="core"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="hips"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="feet"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>

            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    )
}
export default RegionLayout
