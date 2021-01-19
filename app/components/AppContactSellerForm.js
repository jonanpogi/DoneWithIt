import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "./forms";
import messagesApi from "../api/messages";
import colors from "../config/colors";

Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: true,
        };
    },
});

function AppContactSellerForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if (!result.ok) {
            console.log("Error", result);
            return Alert.alert(
                "Error",
                "Could not send the message to the seller."
            );
        }

        resetForm();

        const content = {
            title: "Awesome!",
            body: "Your message was sent to the seller.",
        };

        Notifications.scheduleNotificationAsync({ content, trigger: null });
    };

    return (
        <AppForm
            initialValues={{ message: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <AppFormField
                maxLength={255}
                multiline
                name="message"
                numberOfLines={3}
                placeholder="Message..."
            />
            <AppSubmitButton title="Contact Seller" color={colors.primary} />
        </AppForm>
    );
}

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
});

export default AppContactSellerForm;
