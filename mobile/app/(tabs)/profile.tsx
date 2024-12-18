import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "@/context/GlobalProvider";
import InfoBox from "@/components/common/InfoBox";
import Divider from "@/components/common/Divider";
import PageHeader from "@/components/PageHeader";

const Profile = () => {
    const { user, logout } = useGlobalContext(); // Используем logout из контекста

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full min-h-[80vh] items-center px-4 my-4">
                    {/* Заголовок страницы с иконкой логаута */}
                    <PageHeader title="Profile" icon="log-out-outline" onIconPress={logout} />

                    <View className="w-full flex flex-col gap-7 justify-center items-center pt-4 mb-12">
                        {/* Фото и имя пользователя */}
                        <View name="photo-and-name-area" className="flex-col justify-center items-center">
                            <Image
                                source={{ uri: user?.avatar }}
                                className="w-16 h-16 border border-secondary rounded-lg"
                                resizeMode="contain"
                            />
                            <Text className="text-2xl text-gray-300 font-cbebas mt-5">
                                {user?.username || "Unknown User"}
                            </Text>
                            <Text className="text-lg text-gray-300 font-mregular mt-2">
                                Basic member
                            </Text>
                        </View>

                        {/* Статистика пользователя */}
                        <View name="stats-area" className="flex flex-row">
                            <InfoBox title="85 kg" subtitle="Weight" />
                            <Divider vertical />
                            <InfoBox title="181 cm" subtitle="Height" />
                            <Divider vertical />
                            <InfoBox title="30 years" subtitle="Age" />
                        </View>

                        <View name="next-area" className="" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
