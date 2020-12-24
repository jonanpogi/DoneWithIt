import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EditListingButton from "./EditListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

export default TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Feed"
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="home"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="ListingEditScreen"
            component={ListingEditScreen}
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <EditListingButton
                        onPress={() =>
                            navigation.navigate(routes.LISTING_EDIT_SCREEN)
                        }
                    />
                ),
            })}
        />
        <Tab.Screen
            name="Account"
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="account"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
    </Tab.Navigator>
);
