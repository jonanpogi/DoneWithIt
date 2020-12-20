import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

// usefull for different platform usage
import Constant from "expo-constants";

function AppBlankScreen({ children, style }) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constant.statusBarHeight,
    },
});

export default AppBlankScreen;
