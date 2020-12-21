import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function AppSubmitButton({ color, title }) {
    const { handleSubmit } = useFormikContext();

    return <AppButton color={color} onPress={handleSubmit} title={title} />;
}

export default AppSubmitButton;
