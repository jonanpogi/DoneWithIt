import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

export default AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={routes.ACCOUNT_SCREEN}
            component={AccountScreen}
            options={{ title: "Account" }}
        />
        <Stack.Screen
            name={routes.MESSAGES_SCREEN}
            component={MessagesScreen}
            options={{ title: "Messages" }}
        />
    </Stack.Navigator>
);
