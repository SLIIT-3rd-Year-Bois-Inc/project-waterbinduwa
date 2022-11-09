import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../views/home";
import Search from "../../views/search";
import { useNavigationContainerRef } from "@react-navigation/native";
import { useEffect } from "react";
import auth from '@react-native-firebase/auth';
// import Profile from "../../views/profile";
import Profile from "../../views/orgHome";
import Ionicons from 'react-native-vector-icons/Ionicons'

const home = 'Home';
const search = 'Search';
const profile = 'Profile';
const orgHome = 'OrgHome';


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
        <Tab.Navigator
        initialRouteName={home}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: '#FFFFFF',
            tabBarInactiveTintColor: '#00282C',
            tabBarLabelStyle : {paddingBottom : 10, fontSize : 10},
            tabBarStyle: {padding:10, height : 60, backgroundColor : "#68B0B7"},
            tabBarIcon : ({focused, color, size}) => {
                let iconName;
                let rn =route.name;

                if(rn === home){
                    iconName = focused ? 'home' : 'home-outline';
                }else if (rn === search){
                    iconName = focused ? 'search' : 'search-outline';
                }else if (rn === profile){
                    iconName = focused ? 'person' : 'person-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}/> 
            },
        })}>

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
} 