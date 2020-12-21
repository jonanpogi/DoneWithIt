import React from "react";
import AppBlankScreen from "../components/AppBlankScreen";
import { StyleSheet } from "react-native";
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    AppSubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import colors from "../config/colors";

const initialItems = [
    { label: "test1", value: 1 },
    { label: "test2", value: 2 },
    { label: "test3", value: 3 },
];

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    category: Yup.object().nullable(true).required().label("Category"),
    description: Yup.string().optional().label("Description"),
});

function ListingEditScreen(props) {
    return (
        <AppBlankScreen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    category: null,
                    description: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    autoCaptilize="none"
                    autoCorrect={false}
                    name="title"
                    placeholder="Title"
                    textContentType="none"
                />

                <AppFormField
                    autoCaptilize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    name="price"
                    placeholder="Price"
                    textContentType="none"
                />

                <AppFormPicker
                    name="category"
                    items={initialItems}
                    placeholder="Category"
                />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={5}
                    placeholder="Description"
                />

                <AppSubmitButton color={colors.primary} title="post" />
            </AppForm>
        </AppBlankScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "firebrick",
    },
});

export default ListingEditScreen;
