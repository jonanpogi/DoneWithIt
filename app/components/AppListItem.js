import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import AppText from "../components/AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

function AppListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.listContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && (
                            <AppText style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    subTitle: {
        fontSize: 15,
        color: colors.medium,
    },
    title: {
        fontWeight: "bold",
    },
    listContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
});

export default AppListItem;
