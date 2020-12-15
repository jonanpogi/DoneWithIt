import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            {[
                {
                    icon: "close",
                    style: styles.cancelButton,
                },
                {
                    icon: "trash-can-outline",
                    style: styles.deleteButton,
                },
            ].map((object, index) => (
                <MaterialCommunityIcons
                    key={index}
                    name={object.icon}
                    size={50}
                    style={object.style}
                    color="white"
                />
            ))}
            <Image
                style={styles.image}
                source={require(`../assets/chair.jpg`)}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cancelButton: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteButton: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default ViewImageScreen;
