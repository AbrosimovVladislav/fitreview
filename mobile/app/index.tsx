import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "@/context/GlobalProvider";
import { images } from "@/constants";
import Button from "@/components/common/Button";

const RootLayout = () => {
    const { isLoading, isLoggedIn } = useGlobalContext();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (isLoggedIn) {
        return <Redirect href="/home" />;
    }

    return (
        <SafeAreaView className="bg-primary flex-1">
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
                <View className="w-full justify-center items-center px-4">
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[320px]"
                        resizeMode="contain"
                    />
                    <Text className="text-5xl text-secondary-200 font-cbebas text-center">
                        Fit Review
                    </Text>
                    <Text className="text-md font-mregular text-gray-100 mt-7 text-center">
                        Analyze, Make a Plan, Fix Your Problems
                    </Text>
                    <Button
                        title="Let's Start"
                        onPress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
};

export default RootLayout;
