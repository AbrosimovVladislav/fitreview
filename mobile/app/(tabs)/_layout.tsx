import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center py-1 w-16">
            <Ionicons name={icon} size={22} color={color} />
            <Text
                className={`${
                    focused ? 'font-semibold' : 'font-normal'
                } text-xs text-center pt-1`}
                style={{ color }}
            >
                {name}
            </Text>
        </View>
    );
};


const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622', // Чёрный фон
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 80,
                        justifyContent: 'space-between',
                        paddingTop: 10, // Поднимаем линию над иконками
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="home" color={color} name="Home" focused={focused} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="review"
                    options={{
                        title: 'Review',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="fitness" color={color} name="Review" focused={focused} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="training"
                    options={{
                        title: 'Training',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="barbell" color={color} name="Training" focused={focused} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon="person" color={color} name="Profile" focused={focused} />
                        ),
                    }}
                />
            </Tabs>
            <StatusBar backgroundColor="#161622" style="light" />
        </>
    );
};

export default TabsLayout;
