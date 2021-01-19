import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppText from "../components/AppText";
import AppListItem from "../components/lists/AppListItem";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppContactSellerForm from "../components/AppContactSellerForm";
import AppKeyboardAvoidingView from "../components/AppKeyboardAvoidingView";

function ListingDetailsScreen({ route }) {
    const { title, price, images } = route.params;

    return (
        <ScrollView>
            <AppKeyboardAvoidingView style={styles.container}>
                <Image
                    style={styles.image}
                    uri={images[0].url}
                    preview={{ uri: images[0].thumbnailUrl }}
                    tint="light"
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.price}>{price}</AppText>
                    <View style={styles.userContainer}>
                        <AppListItem
                            image={require(`../assets/mosh.jpg`)}
                            title="Jonan Bie"
                            subTitle="5 Listings"
                        />
                    </View>
                    <AppContactSellerForm listing={route.params} />
                </View>
            </AppKeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
        alignItems: "flex-start",
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 5,
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;
