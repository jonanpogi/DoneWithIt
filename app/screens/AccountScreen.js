import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import AppListItem from "../components/lists/AppListItem";
import AppIcon from "../components/AppIcon";
import AppListSeparator from "../components/lists/AppListSeparator";

import colors from "../config/colors";
import routes from "../navigation/routes";

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
    return (
        <AppBlankScreen style={styles.screen}>
            <View style={styles.container}>
                <AppListItem
                    title="Jonan Bie"
                    subTitle="jonan.bie@gmail.com"
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
                        onPress={() => navigation.navigate(item.targetScreen)}
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
