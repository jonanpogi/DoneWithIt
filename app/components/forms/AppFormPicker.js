import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

function AppFormPicker({
    name,
    numColumns,
    items,
    PickerItemComponent,
    placeholder,
    width,
}) {
    const { setFieldValue, errors, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numColumns={numColumns}
                onSelectedItem={(selectedItem) =>
                    setFieldValue(name, selectedItem)
                }
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({});

export default AppFormPicker;
