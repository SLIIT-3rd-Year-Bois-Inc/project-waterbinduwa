import React from "react";
import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth"
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation();
    
    const logout = async () => {
        await auth().signOut();
        navigation.navigate("Login" as never);
    }

    return (
        <View>
            <Text>This is the home screen</Text>
            <Button title="Logout" onPress={logout}/>
        </View>
    )
}