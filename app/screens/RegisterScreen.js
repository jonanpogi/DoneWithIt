import React from "react";
import { StyleSheet } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import colors from "../config/colors";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
    return (
        <AppBlankScreen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCaptilize="none"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                />

                <AppFormField
                    autoCaptilize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCaptilize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <AppSubmitButton title="register" color={colors.primary} />
            </AppForm>
        </AppBlankScreen>
    );
}

const styles = StyleSheet.create({
    container: {},
});

export default RegisterScreen;
