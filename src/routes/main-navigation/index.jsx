import { createStackNavigator } from "@react-navigation/stack";
import Posts from "../../views/posts";
import NavigatorHome from "../home-navigation";

const Stack = createStackNavigator();

export function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainHome" component={NavigatorHome} />
            <Stack.Screen name="Posts" component={Posts}/>
        </Stack.Navigator>
    )
}