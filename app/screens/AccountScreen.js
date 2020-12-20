import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppListSeparator from "../components/AppListSeparator";

import colors from "../config/colors";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
    {
        title: "Log Out",
        icon: {
            name: "logout",
            backgroundColor: colors.warning,
        },
    },
];

function AccountScreen(props) {
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
