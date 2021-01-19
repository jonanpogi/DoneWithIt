import React from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    View,
} from "react-native";

function AppKeyboardAvoidingView({ children, style }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : null}
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
    },
    inner: {
        justifyContent: "flex-end",
    },
});

export default AppKeyboardAvoidingView;
