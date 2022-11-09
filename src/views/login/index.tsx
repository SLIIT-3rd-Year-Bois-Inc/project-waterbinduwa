import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ToastAndroid } from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import GeneralStatusBarColor from "../../components/GeneralStatusBarColor/GeneralStatusBarColor";
import firestore from '@react-native-firebase/firestore';

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [hidden, setHidden] = useState(false);
  

    const login = async () => {
        try {
            if(!username) {
                ToastAndroid.showWithGravity(
                    "The email cannot be empty",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                return;
            }

            if(!password) {
                ToastAndroid.showWithGravity(
                    "Password cannot be empty",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
            }

            if(password.length < 6) {
                ToastAndroid.showWithGravity(
                    "Password is too short",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                return;
            }
            await auth().signInWithEmailAndPassword(username, password);
            console.log("Successfully logged in ", username, password);
            let user = await firestore().collection("orgPerson").where("email", "==",username.toLowerCase()).get();

            if(!user || !user.docs || user.docs.length == 0) {
                console.log("No users with this email");
                navigation.navigate("MainHome" as never);
                return;
            }

            let user_data = user.docs[0].data();

            if(user_data) {
                if(user_data.type == "org") {
                    navigation.navigate("orgHome" as never);
                    return;
                }
            }

            navigation.navigate("MainHome" as never);
        }catch(e){
            console.error(e);
        }
    }
    
    return (
        <View style={styles.color}>
            <GeneralStatusBarColor backgroundColor="#11ACBA"
      barStyle="light-content"/>
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
                    <Text style={[{ textAlign: "right", paddingHorizontal: 10, paddingTop: 8 }, styles.gray_text]}>Forgot Password?</Text>
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
        width: "100%",
        
    },
    logo: {
        width: "45%",
        
        marginVertical: 15
    },
    logo_container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    color : {
        backgroundColor : "#11ACBA",
        height: "100%",
        width: "100%",
    },
    form: {
        width: "100%",
        paddingHorizontal: 50,
        marginTop: 20
    },
    text_input: {
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor : "white"
    },
    label_padding: {
        paddingHorizontal: 10,
        paddingBottom: 5
    },
    login_button: {
        paddingHorizontal: 60,
        paddingVertical: 12,
        backgroundColor: "#00646D",
        marginTop: 60,
        marginLeft: 0,
        color: "white",
        borderRadius: 30,
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
        color: "white"
    },
    gray_text: {
        color: "#282828"
    }
});