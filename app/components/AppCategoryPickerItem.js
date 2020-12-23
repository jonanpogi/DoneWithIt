import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

function AppCategoryPickerItem({ item, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <AppIcon
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    },
});

export default AppCategoryPickerItem;
