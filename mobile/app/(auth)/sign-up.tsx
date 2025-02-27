import {View, Text, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';
import {Link, router} from 'expo-router';
import {createUserWithEmailAndPassword, getIdToken, updateProfile} from 'firebase/auth';
import {auth} from '@/firebase';
import {postRequest} from "@/service/beclient";

const SignUp = () => {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
    });
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
        if (!form.userName || !form.email || !form.password) {
            Alert.alert("Error", "Please fill in all the fields");
            return;
        }

        setIsSubmitting(true);

        try {
            // Регистрируем пользователя через Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
            const user = userCredential.user;

            // Обновляем профиль пользователя (например, добавляем displayName)
            await updateProfile(user, {displayName: form.userName});

            // Получаем новый токен после обновления профиля
            const idToken = await getIdToken(user, true); // true означает форсировать обновление токена

            // Отправляем запрос на регистрацию на сервер
            await postRequest("/auth/register", {idToken});

            Alert.alert("Success", "User registered successfully!");
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
                keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0} // Уменьшаем лишний отступ
                style={{flex: 1}}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{flex: 1, justifyContent: "center", paddingHorizontal: 16}}>
                        <Text className="text-3xl text-gray-300 text-semibold mt-4 font-cbebas"
                              style={{opacity: isKeyboardVisible ? 0 : 1}}>
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
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
        ;
};

export default SignUp;
