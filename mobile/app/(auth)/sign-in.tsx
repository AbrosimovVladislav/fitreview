import { View, Text, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/common/FormField';
import { Link, router } from 'expo-router';
import Button from '@/components/common/Button';
import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
import { auth } from '@/firebase';
import { postRequest } from "@/service/beclient";

const SignIn = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill in all the fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
            const user = userCredential.user;
            const idToken = await getIdToken(user);

            // Отправляем запрос на логин
            const serverResponse = await postRequest("/auth/login", { idToken });

            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} className="bg-primary flex-1">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={0} // Убираем возможный лишний отступ
                style={{ flex: 1 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 16 }}>
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
