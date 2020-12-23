import React, { useEffect } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";

function AppImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = Permission.askAsync(
            Permission.CAMERA,
            Permission.LOCATION
        );
    };

    const handlePress = () => {
        !imageUri
            ? selectImage()
            : Alert.alert(
                  "Delete Image",
                  "Are you sure you want to remove this?",
                  [
                      { text: "Yes", onPress: () => onChangeImage(null) },
                      { text: "No" },
                  ]
              );
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri ? (
                    <MaterialCommunityIcons
                        name="camera"
                        size={50}
                        color={colors.medium}
                    />
                ) : (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        width: 100,
        height: 100,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
});

export default AppImageInput;
