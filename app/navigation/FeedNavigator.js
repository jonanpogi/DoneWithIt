import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

export default FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.LISTING_SCREEN} component={ListingScreen} />
        <Stack.Screen
            name={routes.LISTING_DETAILS_SCREEN}
            component={ListingDetailsScreen}
        />
    </Stack.Navigator>
);
