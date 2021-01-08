import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import {
    AppErrorMessage,
    AppForm,
    AppFormField,
    AppSubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import * as Yup from "yup";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
    const registerApi = useApi(auth.register);
    const loginApi = useApi(auth.login);
    const { logIn } = useAuth();
    const [error, setError] = useState(null);

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occured.");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        logIn(authToken);
    };

    return (
        <>
            <AppActivityIndicator
                visible={registerApi.loading || loginApi.loading}
            />
            <AppBlankScreen style={styles.container}>
                <AppForm
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <AppErrorMessage error={error} visible={error !== null} />

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
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default RegisterScreen;
