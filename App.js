import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppOfflineNotice from "./app/components/AppOfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import { getUser } from "./app/auth/storage";
import AppLoading from "expo-app-loading";
import { navigationRef } from "./app/navigation/rootNavigation";

function App(props) {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {
        const user = await getUser();
        if (user) setUser(user);
    };

    if (!isReady)
        return (
            <AppLoading
                startAsync={restoreUser}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <AppOfflineNotice />
            <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;
