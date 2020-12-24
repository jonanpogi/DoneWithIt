import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

export default AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: "Login" }}
        />
        <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ title: "Register" }}
        />
    </Stack.Navigator>
);
