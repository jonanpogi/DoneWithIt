import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function AppListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
    showChevrons,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.listContainer}>
                        <AppText style={styles.title} numberOfLines={1}>
                            {title}
                        </AppText>
                        {subTitle && (
                            <AppText style={styles.subTitle} numberOfLines={2}>
                                {subTitle}
                            </AppText>
                        )}
                    </View>
                    {showChevrons && (
                        <MaterialCommunityIcons
                            color={colors.medium}
                            name="chevron-right"
                            size={20}
                        />
                    )}
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
        alignItems: "center",
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
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
});

export default AppListItem;
