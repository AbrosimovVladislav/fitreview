import {View, Text} from 'react-native';
import React from 'react';
import {IconHandStop} from "@tabler/icons-react-native";
import EstimationLabel from "@/components/review/result/interactive-body-map/EstimationLabel";
import {getEstimationColor} from "@/service/GradientColorService";

const MainProblemItem = ({problem}) => {
    return (
        <View className="flex-row items-center gap-5 px-2 py-4">
            <View className="flex items-center justify-center pb-6">
                <EstimationLabel
                    regionName="undefined"
                    regionEstimation={problem.estimation}
                    size="md"
                />
                <View
                    className="absolute top-7 w-10 h-10 rounded-full flex items-center justify-center mt-1"
                    style={{
                        backgroundColor: getEstimationColor(problem.estimation),
                    }}>
                    <IconHandStop size={25} color='black'/>
                </View>
            </View>

            <View className="flex-1">
                <Text className="text-xl text-white font-semibold font-cbebas">
                    {problem.title}
                </Text>
                <Text className="text-sm text-gray-100 font-mregular pt-1">
                    {problem.description}
                </Text>
            </View>
        </View>
    );
};

export default MainProblemItem;
