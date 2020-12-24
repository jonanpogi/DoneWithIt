import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppBlankScreen from "../components/AppBlankScreen";
import AppCard from "../components/AppCard";
import colors from "../config/colors";
import routes from "../navigation/routes";

const initialData = [
    {
        id: 1,
        title: "jacket",
        price: "$100",
        image: require(`../assets/jacket.jpg`),
    },
    {
        id: 2,
        title: "couch",
        price: "$200",
        image: require(`../assets/couch.jpg`),
    },
];

function ListingScreen({ navigation }) {
    const [data, setData] = useState(initialData);
    const [refreshing, setRefreshing] = useState(false);

    return (
        <AppBlankScreen style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <AppCard
                        title={item.title}
                        subTitle={item.price}
                        image={item.image}
                        onPress={() =>
                            navigation.navigate(
                                routes.LISTING_DETAILS_SCREEN,
                                item
                            )
                        }
                    />
                )}
                refreshing={refreshing}
                onRefresh={() => setData(initialData)}
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
