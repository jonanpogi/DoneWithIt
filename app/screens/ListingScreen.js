import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listings from "../api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";
import { useState } from "react";

function ListingScreen({ navigation }) {
    const [refreshing, setRefreshing] = useState(false);

    const getListingsApi = useApi(listings.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <AppBlankScreen style={styles.container}>
            {getListingsApi.error && (
                <>
                    <AppText>Couldn't retrieve the Feeds.</AppText>
                    <AppButton
                        title="retry"
                        color={colors.primary}
                        onPress={getListingsApi.request}
                    />
                </>
            )}
            <AppActivityIndicator visible={getListingsApi.loading} />
            <FlatList
                data={getListingsApi.data}
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
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                )}
                refreshing={refreshing}
                onRefresh={getListingsApi.request}
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
