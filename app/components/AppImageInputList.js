import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppImageInput from "./AppImageInput";

function AppImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef(null);

    return (
        <View>
            <ScrollView
                horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {imageUris.map((uri, index) => (
                        <View style={styles.imageContainer} key={uri}>
                            <AppImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}

                    <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    imageContainer: {
        marginRight: 10,
    },
});

export default AppImageInputList;
