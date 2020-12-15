import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";

function AppButton({ title, color, onPress }) {
    return (
        <TouchableOpacity style={styles.button(color)} onPress={onPress}>
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: (color) => ({
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 25,
        backgroundColor: color,
        margin: 5,
    }),
    text: {
        color: colors.white,
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

export default AppButton;
