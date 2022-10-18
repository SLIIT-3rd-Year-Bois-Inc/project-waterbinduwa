import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../views/home";
import Search from "../../views/search";

const Tab = createBottomTabNavigator();

export default function NavigatorHome() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
        </Tab.Navigator>
    )
}