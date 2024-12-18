import { View, Text, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';
import { Link, router } from 'expo-router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/firebase'; // Импорт Firebase SDK

const SignUp = () => {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.userName || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields');
            return;
        }

        setIsSubmitting(true);

        try {
            // Создание пользователя через Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);

            // Обновление профиля с именем пользователя
            await updateProfile(userCredential.user, {
                displayName: form.userName,
            });

            Alert.alert('Success', 'User registered successfully!');
            router.replace('/home');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full min-h-[80vh] justify-center px-4 my-4">
                    <Text className="text-3xl text-gray-300 text-semibold mt-4 font-cbebas">
                        Register to Fit Review
                    </Text>

                    <FormField
                        title="Username"
                        value={form.userName}
                        handleChangeText={(e) =>
                            setForm({
                                ...form,
                                userName: e,
                            })
                        }
                        otherStyles="mt-7"
                    />
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) =>
                            setForm({
                                ...form,
                                email: e,
                            })
                        }
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) =>
                            setForm({
                                ...form,
                                password: e,
                            })
                        }
                        otherStyles="mt-7"
                        secureTextEntry={true}
                    />

                    <Button
                        title="Register"
                        onPress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="justify-center pt-7 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-mregular">
                            Already have an account?
                        </Text>
                        <Link href="/sign-in" className="text-lg font-msemibold text-secondary">
                            Log In
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
