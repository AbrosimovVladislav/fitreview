import {View, Text, Image, ScrollView, Switch} from 'react-native'
import React, {useRef, useState} from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import PageHeader from "@/components/PageHeader";


const DetailsBottomSheet = ({isOpen, onClose, region}) => {
    const bottomSheetRef = useRef(null);
    const [showDiagram, setShowDiagram] = useState(false); // Состояние для переключения изображения

    function handleToggle() {
        setShowDiagram(prevState => !prevState);
    }

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
                        source={{uri: showDiagram ? region.diagramImage : region.userImage}}
                        className="w-full h-96 bg-black-200"
                        resizeMode="contain"
                    />

                    <View className={`absolute top-24 ${region.name.includes("R") ? "right-9" : "left-9"} flex-row items-center`}>
                        <Text className="text-white mr-2">{showDiagram ? 'Photo' : 'X-Ray'}</Text>
                        <Switch
                            value={showDiagram}
                            onValueChange={handleToggle}
                            thumbColor="#FF9001"
                            trackColor={{ false: "#767577", true: "#FF9001" }}
                        />
                    </View>

                    {
                        region.points.map((point, index) =>
                            <Text key={index} className="text-md text-center text-gray-100 py-2 font-mregular">
                                {index + 1}. {point}
                            </Text>)
                    }


                </View>
            </ScrollView>
        </BottomSheet>
    )
}
export default DetailsBottomSheet
