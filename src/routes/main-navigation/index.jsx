import { createStackNavigator } from "@react-navigation/stack";
import Posts from "../../views/posts";
import NavigatorHome from "../home-navigation";
import Login from "../../views/login";
import Comments from "../../views/comments";

const Stack = createStackNavigator();

export function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainHome" component={NavigatorHome} options={{ headerShown: false }} />
            <Stack.Screen name="Posts" component={Posts}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Comments" component={Comments}></Stack.Screen>
        </Stack.Navigator>
    )
}