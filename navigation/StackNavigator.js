import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";
import Report from '../screens/Report';
import DisplayScreen from "../screens/DisplayScreen";


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
            <Stack.Screen name="Report" component={Report} />
            <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
