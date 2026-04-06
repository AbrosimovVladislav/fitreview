import React, { useState, useEffect } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/common/FormField';
import { Link, router } from 'expo-router';
import Button from '@/components/common/Button';
import { supabase } from '@/supabase';
import { securePostRequest } from "@/service/beclient";

const SignIn = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill in all the fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: form.email,
                password: form.password,
            });
            if (error) throw error;

            // Backend login (creates fr_user if needed)
            await securePostRequest("/auth/login", {});

            router.replace("/home");
        } catch (error: any) {
            Alert.alert("Error", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} className="bg-primary flex-1">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={0}
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: isKeyboardVisible ? 'flex-start' : 'center',
                            paddingHorizontal: 16,
                            paddingTop: isKeyboardVisible ? 40 : 0  // можно настроить отступ при открытой клавиатуре
                        }}
                    >
                        <Text className="text-3xl text-gray-300 text-semibold mt-4 font-cbebas">
                            Log in to Fit Review
                        </Text>

                        <FormField
                            title="Email"
                            value={form.email}
                            handleChangeText={(e) => setForm({ ...form, email: e })}
                            otherStyles="mt-7"
                            keyboardType="email-address"
                        />
                        <FormField
                            title="Password"
                            value={form.password}
                            handleChangeText={(e) => setForm({ ...form, password: e })}
                            otherStyles="mt-7"
                            secureTextEntry={true}
                        />

                        <Button
                            title="Log In"
                            onPress={submit}
                            containerStyles="mt-7"
                            isLoading={isSubmitting}
                        />

                        <View className="justify-center pt-7 flex-row gap-2">
                            <Text className="text-lg text-gray-100 font-mregular">Don't have an account?</Text>
                            <Link href="/sign-up" className="text-lg font-msemibold text-secondary">
                                Register
                            </Link>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignIn;
