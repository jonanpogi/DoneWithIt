import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";

function AppCard({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
        elevation: 20,
    },
    detailsContainer: {
        padding: 20,
        alignItems: "flex-start",
    },
    image: {
        height: 200,
        width: "100%",
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 5,
    },
});

export default AppCard;
