import React, { useState } from "react";
import AppBlankScreen from "../components/AppBlankScreen";
import { StyleSheet } from "react-native";
import {
    AppForm,
    AppFormField,
    AppFormImagePicker,
    AppFormPicker,
    AppSubmitButton,
} from "../components/forms";
import * as Yup from "yup";
import colors from "../config/colors";
import AppCategoryPickerItem from "../components/AppCategoryPickerItem";
import useLocation from "../hooks/useLocation";
import listings from "../api/listings";
import UploadScreen from "./UploadScreen";

const initialItems = [
    { label: "test1", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "test2", value: 2, backgroundColor: "green", icon: "email" },
    { label: "test3", value: 3, backgroundColor: "yellow", icon: "lock" },
];

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(10000).label("Price"),
    category: Yup.object().nullable(true).required().label("Category"),
    description: Yup.string().optional().label("Description"),
    images: Yup.array().min(1, "Please select one image."),
});

function ListingEditScreen(props) {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (values, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listings.postListings(
            { ...values, location },
            (progress) => setProgress(progress)
        );

        if (!result) {
            setUploadVisible(false);
            alert("Something went wrong.");
        }

        resetForm();
    };

    return (
        <AppBlankScreen style={styles.container}>
            <UploadScreen
                onDone={() => setUploadVisible(false)}
                progress={progress}
                visible={uploadVisible}
            />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    category: null,
                    description: "",
                    images: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker name="images" />
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
                    width={120}
                />

                <AppFormPicker
                    name="category"
                    numColumns={3}
                    items={initialItems}
                    PickerItemComponent={AppCategoryPickerItem}
                    placeholder="Category"
                    width={"50%"}
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
