import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import AppListItem from "../components/lists/AppListItem";
import AppIcon from "../components/AppIcon";
import AppListSeparator from "../components/lists/AppListSeparator";

import colors from "../config/colors";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        targetScreen: routes.MESSAGES_SCREEN,
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES_SCREEN,
    },
    {
        title: "Log Out",
        icon: {
            name: "logout",
            backgroundColor: colors.warning,
        },
        targetScreen: routes.MESSAGES_SCREEN,
    },
];

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <AppBlankScreen style={styles.screen}>
            <View style={styles.container}>
                <AppListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require(`../assets/mosh.jpg`)}
                />
            </View>
            <FlatList
                data={menuItems}
                keyExtractor={(menuItem) => menuItem.title}
                renderItem={({ item }) => (
                    <AppListItem
                        title={item.title}
                        IconComponent={
                            <AppIcon
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}
                            />
                        }
                        onPress={() => {
                            item.title !== "Log Out"
                                ? navigation.navigate(item.targetScreen)
                                : logOut();
                        }}
                    />
                )}
                ItemSeparatorComponent={AppListSeparator}
            />
        </AppBlankScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    },
});

export default AccountScreen;
