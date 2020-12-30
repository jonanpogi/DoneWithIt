import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
    const {
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        values,
    } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormField;
