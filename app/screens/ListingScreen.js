import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listings from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(undefined);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        console.log("firedsss");
        const response = await listings.getListings();

        if (!response.ok) {
            setError(true);
        } else {
            setError(false);
            setData(response.data);
        }
    };

    console.log(error);

    return (
        <AppBlankScreen style={styles.container}>
            {error && (
                <>
                    <AppText>Couldn't retrieve the Feeds.</AppText>
                    <AppButton
                        title="retry"
                        color={colors.primary}
                        onPress={loadListings}
                    />
                </>
            )}
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
                onRefresh={loadListings}
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
