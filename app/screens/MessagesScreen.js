import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppListItem from "../components/lists/AppListItem";
import AppBlankScreen from "../components/AppBlankScreen";
import AppListSeparator from "../components/lists/AppListSeparator";
import AppListItemDeleteAction from "../components/lists/AppListItemDeleteAction";

const messages = [
    {
        id: 1,
        title: "T1",
        decription: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        decription: "D2",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 3,
        title: "T3",
        decription: "D3",
        image: require("../assets/mosh.jpg"),
    },
];

function MessagesScreen(props) {
    const [data, setData] = useState(messages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDeleteItem = (id) => {
        setData(data.filter((obj) => obj.id !== id));
    };

    const handleOnRefresh = () => {
        setData(messages);
    };

    return (
        <AppBlankScreen>
            <FlatList
                data={data}
                keyExtractor={(data) => data.id.toString()}
                renderItem={({ item }) => (
                    <AppListItem
                        title={item.title}
                        subTitle={item.decription}
                        image={item.image}
                        onPress={() => alert("TEST")}
                        renderRightActions={() => (
                            <AppListItemDeleteAction
                                onPress={() => handleDeleteItem(item.id)}
                            />
                        )}
                        showChevrons={true}
                    />
                )}
                ItemSeparatorComponent={() => <AppListSeparator />}
                refreshing={refreshing}
                onRefresh={handleOnRefresh}
            />
        </AppBlankScreen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
