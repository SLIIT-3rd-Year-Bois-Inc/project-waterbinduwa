import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../views/home";
import Search from "../../views/search";
import { useNavigationContainerRef } from "@react-navigation/native";
import { useEffect } from "react";
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();

export default function NavigatorHome({ navigation }) {
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if(!user) {
                navigation.navigate("Login");
            }
        });
    }, []);
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Search" component={Search}/>
        </Tab.Navigator>
    )
} 