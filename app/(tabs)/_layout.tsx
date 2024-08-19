import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {Ionicons} from "@expo/vector-icons";
import {Icon} from "native-base";

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-1 pt-3">
            <Icon as={Ionicons} name={icon} size="lg" color={color} className='w-6 h-6'/>
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{color: color}}
            >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84
                    }
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon='home'
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="review"
                    options={{
                        title: 'Review',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon='barbell'
                                color={color}
                                name="Review"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon='person'
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
            <StatusBar backgroundColor="#161622" style="light"/>
        </>
    )
}
export default TabsLayout
