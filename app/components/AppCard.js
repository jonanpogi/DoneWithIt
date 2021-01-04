import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "../components/AppText";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";

function AppCard({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image
                    tint="light"
                    uri={imageUrl}
                    style={styles.image}
                    preview={{ uri: thumbnailUrl }}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>
                        {title}
                    </AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>
                        {subTitle}
                    </AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 25,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
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
