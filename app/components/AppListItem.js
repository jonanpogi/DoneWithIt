import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";

function AppListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.listContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    subTitle: {
        fontSize: 15,
        color: colors.medium,
    },
    title: {
        fontWeight: "bold",
    },
    // listContainer: {},
});

export default AppListItem;
