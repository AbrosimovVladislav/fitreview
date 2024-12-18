import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/common/FormField';
import { Link, router } from 'expo-router';
import Button from '@/components/common/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase'; // Импорт из файла firebase.js

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields');
            return;
        }

        setIsSubmitting(true);

        try {
            // Логиним пользователя через Firebase
            const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
            const user = userCredential.user;6

            // После успешного входа направляем на домашний экран
            router.replace('/home');
            console.log('User signed in:', user);
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
                        Log in to Fit Review
                    </Text>

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
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
