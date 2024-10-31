import {View, Text, Image, ScrollView} from 'react-native'
import React, {useRef} from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import PageHeader from "@/components/PageHeader";


const ReviewRegionDetailsBottomSheet = ({isOpen, onClose, region}) => {
    const bottomSheetRef = useRef(null);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={isOpen ? 0 : -1} // Открываем Bottom Sheet при isOpen
            snapPoints={['100%', '100%']} // Высота Bottom Sheet
            enablePanDownToClose={true}
            onClose={onClose} // Закрываем Bottom Sheet
            handleIndicatorStyle={{backgroundColor: '#CDCDE0'}} // Цвет самой палочки
            handleStyle={{backgroundColor: '#1E1E2D'}} // Замените на нужный цвет для фона вокруг палочки
            backgroundStyle={{backgroundColor: '#1E1E2D'}}
        >
            <ScrollView>
                <View className="flex-col items-center pt-4 px-4 bg-black-100">
                    <PageHeader
                        title={region.title}
                        icon='close'
                        onIconPress={onClose}
                        removeGoBackIcon/>
                    <Image
                        source={{uri: region.userImage}}
                        className="w-full h-96"
                        resizeMode="contain"
                    />

                    {
                        region.points.map((point, index) =>
                            <Text className="text-md text-center text-gray-100 py-2 font-mregular">
                                {index + 1}. {point}
                            </Text>)
                    }


                </View>
            </ScrollView>
        </BottomSheet>
    )
}
export default ReviewRegionDetailsBottomSheet
