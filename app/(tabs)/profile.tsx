import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalContext} from "@/context/GlobalProvider";
import {signOut} from "@/lib/appwrite";
import {router} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import InfoBox from "@/components/common/InfoBox";
import Divider from "@/components/common/Divider";

const Profile = () => {

    const {user, setUser, setIsLoggedIn} = useGlobalContext();

    const logout = async () => {
        await signOut();
        setUser(null);
        setIsLoggedIn(false);

        router.replace("/sign-in");
    };

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full min-h-[80vh] items-center px-4 my-4'>
                    <View className="w-full flex flex-col gap-7 justify-center items-center mb-12">

                        <View name='top-line-area' className='flex flex-row justify-between w-full'>
                            <Ionicons name='chevron-back-outline' size={28} color='white'/>
                            <Text className='text-3xl text-gray-300 font-cbebas'>
                                Profile
                            </Text>
                            <TouchableOpacity onPress={logout}>
                                <Ionicons name='log-out-outline' size={28} color='white'/>
                            </TouchableOpacity>
                        </View>

                        <View name='photo-and-name-area' className='flex-col justify-center items-center'>
                            <Image
                                source={{uri: user?.avatar}}
                                className='w-16 h-16 border border-secondary rounded-lg'
                                resizeMode='contain'
                            />
                            <Text className='text-2xl text-gray-300 font-cbebas mt-5'>
                                {user?.username}
                            </Text>
                            <Text className='text-lg text-gray-300 font-mregular mt-2'>
                                Basic member
                            </Text>
                        </View>

                        <View name='stats-area' className='flex flex-row'>
                            <InfoBox title='85 kg' subtitle='Weight'/>
                            <Divider vertical/>
                            <InfoBox title='181 cm' subtitle='Height'/>
                            <Divider vertical/>
                            <InfoBox title='30 years' subtitle='Age'/>
                        </View>

                        <View name='next-area' className=''>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
