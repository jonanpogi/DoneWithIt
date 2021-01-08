import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import * as Yup from "yup";

import AppBlankScreen from "../components/AppBlankScreen";
import {
    AppForm,
    AppFormField,
    AppSubmitButton,
    AppErrorMessage,
} from "../components/forms";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    const loginApi = useApi(auth.login);
    const { logIn } = useAuth();
    const [visible, setVisible] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await loginApi.request(email, password);

        if (!result.ok) {
            return setVisible(true);
        } else {
            setVisible(false);
            logIn(result.data);
        }
    };

    return (
        <>
            <AppActivityIndicator visible={loginApi.loading} />
            <AppBlankScreen style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require(`../assets/logo-red.png`)}
                />

                <AppErrorMessage
                    error="Invalid email and/or password."
                    visible={visible}
                />

                <AppForm
                    initialValues={{ email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
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

                    <AppSubmitButton title="submit" color={colors.primary} />
                </AppForm>
            </AppBlankScreen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;
