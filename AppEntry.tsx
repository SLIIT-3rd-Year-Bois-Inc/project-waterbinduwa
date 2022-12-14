import { NavigationContainer, useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import { useEffect } from "react";
import NavigatorHome from "./src/routes/home-navigation";
import { MainNavigator } from "./src/routes/main-navigation";
import { Home } from "./src/views/home";
import { WithSplash } from "./src/views/splash";

export default function AppEntry() {
    return (
        <NavigationContainer>
            <WithSplash isAppReady>
                <MainNavigator />
            </WithSplash>
        </NavigationContainer>
    )
}