import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

export default FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListingScreen" component={ListingScreen} />
        <Stack.Screen
            name="ListingDetailsScreen"
            component={ListingDetailsScreen}
        />
    </Stack.Navigator>
);
