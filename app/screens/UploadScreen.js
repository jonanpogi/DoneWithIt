import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

function UploadScreen({ onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? (
                    <ProgressBar
                        color={colors.primary}
                        progress={progress}
                        width={200}
                    />
                ) : (
                    <LottieView
                        source={require(`../assets/animations/done.json`)}
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        style={styles.animation}
                    />
                )}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    animation: {
        width: 150,
    },
});

export default UploadScreen;
