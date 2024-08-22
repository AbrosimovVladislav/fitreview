import {Text, useWindowDimensions} from 'react-native'
import React from 'react'
import {TabBar, TabView} from "react-native-tab-view";

interface TabsProps {
    tabs: ITab[]
}

interface ITab {
    key: string,
    title: string,
    content: React.ReactNode
}

const Tabs = ({tabs}: TabsProps) => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(tabs.map(tab => ({key: tab.key, title: tab.title})));

    const renderScene = ({ route }: { route: ITab }) => {
        const tab = tabs.find(tab => tab.key === route.key);
        return tab ? tab.content : null;
    };

    return (
        <TabView
            className='pt-2'
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    style={{backgroundColor: 'transparent'}}
                    renderLabel={({route, focused, color}) => (
                        <Text className={`text-lg ${focused ? 'text-white' : 'text-gray-500'} font-bebas`}>
                            {route.title}
                        </Text>
                    )}
                    indicatorStyle={{backgroundColor: 'white'}}
                />
            )}
        />
    )
}
export default Tabs
