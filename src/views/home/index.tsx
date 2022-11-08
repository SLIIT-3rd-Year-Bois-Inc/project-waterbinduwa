import React from "react";
import { View, Text, Button,ScrollView } from "react-native";
import auth from "@react-native-firebase/auth"
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import Post from "../../components/posts";
import Event from "../../components/event/Index";


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
    const goto_addPost = async () => {
        navigation.navigate("addPosts" as never);
    }
    const goto_addEvent = async () => {
        navigation.navigate("addEvent" as never);
    }
    const goto_editEvent = async () => {
        navigation.navigate("editEvent" as never);
    }
    const goto_editPost = async () => {
        navigation.navigate("editPosts" as never);
    }
    const goto_posts = async () => {
        navigation.navigate("posts" as never);
    }
    const goto_event = async () => {
        navigation.navigate("events" as never);
    }

    const goto_add_review = () => {
        navigation.navigate("addReview" as never);
    }
    const goto_org_register = () => {
        navigation.navigate("orgRegister" as never);
    }
    const goto_reg_pick = () => {
        navigation.navigate("regpicker" as never);
    }
    return (
        <View>
            <ScrollView>
            <Text>This is the home screen hi hi</Text>
            <Button title="Logout" onPress={logout}/>
            <Button title="Test Collection" onPress={add_doc}/>
            <Button title="Comments" onPress={goto_comments}/>
            <Button title="add Post" onPress={goto_addPost}/>
            <Button title="add Event" onPress={goto_addEvent}/>
            <Button title="edit Event" onPress={goto_editEvent}/>
            <Button title="edit post" onPress={goto_editPost}/>
            <Button title="post" onPress={goto_posts}/>
            <Button title="event" onPress={goto_event}/>
            <Button title="addReview" onPress={goto_add_review}/>
            <Button title="regpicker" onPress={goto_reg_pick}/>
            <Button title="orgRegister" onPress={goto_org_register}/>
            <Post/>
            <Event/>
            <Post/>
            
            </ScrollView>
            
        </View>
    )
}