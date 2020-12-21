import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import AppListItem from "../components/lists/AppListItem";

import colors from "../config/colors";

function ListingDetailsScreen(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require(`../assets/jacket.jpg`)}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Test</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <AppListItem
                        image={require(`../assets/mosh.jpg`)}
                        title="Jonan Bie"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
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
