import React from "react";
import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth"
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';

export function Home() {
    const navigation = useNavigation();
    
    const logout = async () => {
        await auth().signOut();
        navigation.navigate("Login" as never);
    }

    const add_doc = async () => {
        const collection_ref = firestore().collection("hello");
        await collection_ref.add({ hello: "world" })
    }

    const goto_comments = async () => {
        navigation.navigate("Comments" as never);
    }

    return (
        <View>
            <Text>This is the home screen</Text>
            <Button title="Logout" onPress={logout}/>
            <Button title="Test Collection" onPress={add_doc}/>
            <Button title="Comments" onPress={goto_comments}/>
        </View>
    )
}