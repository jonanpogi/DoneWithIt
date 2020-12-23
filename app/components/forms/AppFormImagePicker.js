import React from "react";
import { StyleSheet } from "react-native";
import AppImageInputList from "../AppImageInputList";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

function AppFormImagePicker({ name }) {
    const { setFieldValue, errors, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    };

    const handleRemove = (uri) => {
        setFieldValue(
            name,
            imageUris.filter((imageUri) => imageUri !== uri)
        );
    };

    return (
        <>
            <AppImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default AppFormImagePicker;
