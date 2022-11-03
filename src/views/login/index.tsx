import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const login = async () => {
        try {
            await auth().signInWithEmailAndPassword(username, password);
            console.log("Successfully logged in ", username, password);
            navigation.navigate("MainHome" as never);
        }catch(e){
            console.error(e);
        }
    }
    
    return (
        <View>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={logo}></Image>
                <View style={styles.form}>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Your Email</Text>
                        <TextInput value={username} onChangeText={text => {setUserName(text)}} style={styles.text_input} placeholder="Email" />
                    </View>
                    <Text style={[styles.label_padding, styles.teal_text]}>Your Password</Text>
                    <TextInput
                        value={password} onChangeText={text => {setPassword (text)}}
                        style={styles.text_input}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <Text style={[{ textAlign: "right", paddingHorizontal: 10, paddingTop: 8 }, styles.teal_text]}>Forgot Password?</Text>
                    <View style={styles.button_wrapper}>
                        <TouchableOpacity style={styles.login_button} onPress={login} >
                            <Text style={styles.white_text}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ flexGrow: 1 }}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    logo: {
        width: "50%",
    },
    logo_container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    form: {
        width: "100%",
        paddingHorizontal: 50,
        marginTop: 20
    },
    text_input: {
        borderColor: "#11acba",
        borderWidth: 2,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    label_padding: {
        paddingHorizontal: 10,
        paddingBottom: 5
    },
    login_button: {
        paddingHorizontal: 60,
        paddingVertical: 12,
        backgroundColor: "#11acba",
        marginTop: 30,
        marginLeft: 10,
        color: "white",
        borderRadius: 30
    },
    button_wrapper: {
        width: "100%",
        flexDirection: "row",
    },
    white_text: {
        color: "white",
        fontSize: 20
    },
    teal_text: {
        color: "#11acba"
    }
});