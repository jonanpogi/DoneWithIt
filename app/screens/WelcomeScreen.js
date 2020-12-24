import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import colors from "../config/colors";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
    return (
        <React.Fragment>
            <ImageBackground
                blurRadius={5}
                style={styles.backgroundImage}
                source={require(`../assets/background.jpg`)}
            >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logoImage}
                        source={require(`../assets/logo-red.png`)}
                    />
                    <AppText style={styles.text}>
                        Sell anything you are done with.
                    </AppText>
                </View>
                <View style={styles.buttonContainer}>
                    {[
                        {
                            title: "login",
                            color: colors.primary,
                            onPress: () =>
                                navigation.navigate(routes.LOGIN_SCREEN),
                        },
                        {
                            title: "register",
                            color: colors.secondary,
                            onPress: () =>
                                navigation.navigate(routes.REGISTER_SCREEN),
                        },
                    ].map((object, index) => (
                        <AppButton
                            key={index}
                            title={object.title}
                            color={object.color}
                            onPress={object.onPress}
                        />
                    ))}
                </View>
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
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
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
    text: {
        paddingTop: 100,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default WelcomeScreen;
