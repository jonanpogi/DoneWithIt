import React from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    View,
} from "react-native";
// usefull for different platform usage
import Constant from "expo-constants";

function AppKeyboardAvoidingView({ children, style }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={[styles.container, style]}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.inner}>{children}</View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constant.statusBarHeight,
    },
    inner: {
        justifyContent: "flex-end",
    },
});

export default AppKeyboardAvoidingView;
