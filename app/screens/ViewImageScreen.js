import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            {[colors.primary, colors.secondary].map((item, index) => (
                <View
                    key={index}
                    style={
                        index === 0
                            ? styles.cancelButton(item)
                            : styles.deleteButton(item)
                    }
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
    cancelButton: (item) => ({
        backgroundColor: item,
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        left: 30,
    }),
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteButton: (item) => ({
        backgroundColor: item,
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        right: 30,
    }),
    image: {
        width: "100%",
        height: "100%",
    },
});

export default ViewImageScreen;
