import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function EditListingButton({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus"
                    size={25}
                    color={colors.primary}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 2,
        height: 50,
        justifyContent: "center",
        width: 50,
        borderRadius: 25,
        bottom: 2,
    },
});

export default EditListingButton;
