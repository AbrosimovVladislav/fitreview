import {View, ScrollView, Image, TouchableOpacity, Text} from 'react-native'
import React, {useState} from 'react'
import PageHeader from "@/components/PageHeader";
import {isSubscriptionActive} from "@/lib/PaymentService";
import {router} from "expo-router";
import {createStatusRecord} from "@/lib/SurveyService";
import {defaultSecondSurveyStep} from "@/constants/survey";
import {Ionicons} from "@expo/vector-icons";
import ReviewRegionDetailsBottomSheet from "@/components/review/ReviewRegionDetailsBottomSheet";
import {newRegions} from "@/constants/temp";

const ReviewResultsScreen = ({user}) => {

    const [selected, setSelected] = useState('');
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);


    const preRefreshAction = async () => {

        if (isSubscriptionActive()) {
            //создать новую запись или кочевряжим старую
            //изменить текущий статус на начало второго опроса или конкретный шат
            await createStatusRecord(user.$id, defaultSecondSurveyStep.status);

            router.push(`/review/survey/${defaultSecondSurveyStep.slug}`)
        } else {
            router.push("/review/payment");
        }
    }

    function handleRegionPress(regionName: string) {
        setSelected(prevState => prevState === regionName ? '' : regionName)
    }

    function handleDetailsPress() {
        setBottomSheetVisible(true);
    }

    return (
        <ScrollView>
            <View className='pt-4'>
                <PageHeader title='Fit Review'/>

                <Text className="text-md text-center text-gray-100 py-2 font-mregular">
                    Warming up your glutes is essential for enhancing movement efficiency,
                    preventing injuries
                </Text>

                <View className="flex flex-row flex-wrap px-4 pt-2">
                    {newRegions.map((region, index) => (
                        <View key={index}
                              className={
                                  `flex w-1/2
                                  ${region.name.includes('R') ? 'items-end' : 'items-start'}`
                              }
                        >
                            <TouchableOpacity
                                onPress={() => handleRegionPress(region.name)}
                                className="flex items-start"
                            >
                                <Image
                                    source={{uri: selected === region.name ? region.diagramImage : region.userImage}}
                                    className="w-32 h-32 border-0.5 border-orange-300"
                                    resizeMode="contain"
                                />
                                {selected === region.name && (
                                    <TouchableOpacity
                                        onPress={handleDetailsPress}
                                        className={region.name.includes("L") ? "absolute top-2 right-2" : "absolute top-2 left-2"}
                                    >
                                        <Ionicons name='information-circle' size={40}
                                                  color='#FF9001'/>
                                    </TouchableOpacity>
                                )}
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {bottomSheetVisible && (
                    <ReviewRegionDetailsBottomSheet
                        isOpen={bottomSheetVisible}
                        onClose={() => setBottomSheetVisible(false)}
                        region={newRegions.filter(r => r.name === selected)[0]}
                    >
                    </ReviewRegionDetailsBottomSheet>
                )}
            </View>

        </ScrollView>
    )
}
export default ReviewResultsScreen
