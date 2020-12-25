import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listings from "../api/listings";

function ListingScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        const response = await listings.getListings();
        setData(response.data);
    };

    return (
        <AppBlankScreen style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <AppCard
                        title={item.title}
                        subTitle={item.price}
                        imageUrl={item.images[0].url}
                        onPress={() =>
                            navigation.navigate(
                                routes.LISTING_DETAILS_SCREEN,
                                item
                            )
                        }
                    />
                )}
                refreshing={refreshing}
                onRefresh={() => {
                    loadListings();
                }}
            />
        </AppBlankScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 20,
    },
});

export default ListingScreen;
