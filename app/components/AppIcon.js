import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppIcon({
    name,
    size = 50,
    backgroundColor = colors.black,
    iconColor = colors.white,
}) {
    return (
        <View style={styles.icon(backgroundColor, size)}>
            <MaterialCommunityIcons
                name={name}
                size={size / 2}
                color={iconColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    icon: (backgroundColor, size) => ({
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
    }),
});

export default AppIcon;
