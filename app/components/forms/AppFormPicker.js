import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

function AppFormPicker({ name, items, placeholder }) {
    const { setFieldValue, errors, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                onSelectedItem={(selectedItem) =>
                    setFieldValue(name, selectedItem)
                }
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({});

export default AppFormPicker;
