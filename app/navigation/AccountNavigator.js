import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

export default AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
    </Stack.Navigator>
);
