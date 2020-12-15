import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

const WelcomeScreen = () => {
    return (
        <React.Fragment>
            <ImageBackground
                style={styles.backgroundImage}
                source={require(`../assets/background.jpg`)}
            >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logoImage}
                        source={require(`../assets/logo-red.png`)}
                    />
                    <Text style={styles.text}>
                        Sell anything you are done with.
                    </Text>
                </View>

                {[colors.primary, colors.secondary].map((item, index) => (
                    <View
                        key={index}
                        style={
                            index === 0
                                ? styles.loginButton(item)
                                : styles.registerButton(item)
                        }
                    />
                ))}
            </ImageBackground>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: (item) => ({
        backgroundColor: item,
        width: "100%",
        height: 70,
    }),
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center",
    },
    logoImage: {
        position: "absolute",
        height: 100,
        width: 100,
    },
    registerButton: (item) => ({
        backgroundColor: item,
        width: "100%",
        height: 70,
    }),
    text: {
        paddingTop: 100,
    },
});

export default WelcomeScreen;
