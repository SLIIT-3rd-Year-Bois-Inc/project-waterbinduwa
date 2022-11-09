import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ToastAndroid } from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

export default function VolRegister() {
    const [username, setUserName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const [errors, setErrors] = useState(" ");


    const checkPW = async () => {
        if (password === conPassword && password != ""){
            register();
        }else {
            showToastWithGravity();
        }
    }

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "Password Does not Match",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };

    
      const showToastWithGravity4 = (data) => {
        ToastAndroid.showWithGravity(
          data,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };

    const register = async () => {
        try{
            setErrors(" ");
            firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredentials) => {
                return userCredentials.user.updateProfile({name : email});
            }).catch((error) => setErrors(error));

            if (errors == " "){
                registerDetails();
                navigation.navigate("Login");
            }else {
                showToastWithGravity4("Details already exist.")
            }
        }catch (e) {
            showToastWithGravity4("Something went wrong");
            console.error(e);
        }
    }

    const registerDetails = async () => {
        try {            
            let document = {
                username : username,
                address : address,
                email : email,
                phone : phone,
                password : password,
                type : "vol",
            }

            await firestore().collection("orgPerson").add(document);
            showToastWithGravity4("Success");
        } catch (e) {
            showToastWithGravity4("Something went wrong");
            console.error(e);
        }
    }
    
    return (
        <View>
            <ScrollView>
            <View style={styles.logo_container}>
              <Text style={[styles.MainfontSize, styles.gray_text]}>Register</Text>
              <Text style={[styles.secondFont, styles.black_text]}>Give us some details about yourself so we can identify you.</Text>
           
                <View style={styles.form}>

                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Name</Text>
                        <TextInput value={username} onChangeText={text => {setUserName(text)}} style={styles.text_input} placeholder="Name" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Address</Text>
                        <TextInput value={address} onChangeText={text => {setAddress(text)}} style={styles.text_input} placeholder="Address" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Email</Text>
                        <TextInput value={email} onChangeText={text => {setEmail(text)}} style={styles.text_input} placeholder="Email" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Phone</Text>
                        <TextInput value={phone} onChangeText={text => {setPhone(text)}} style={styles.text_input} placeholder="Phone" />
                    </View>
                    
                    <Text style={[styles.label_padding, styles.teal_text, { paddingVertical: 5 }]}>Your Password</Text>
                    <TextInput
                        value={password} onChangeText={text => {setPassword (text)}}
                        style={styles.text_input}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <Text style={[styles.label_padding, styles.teal_text, { paddingVertical: 5 }]}>Confirm Password</Text>
                    <TextInput
                        value={conPassword} onChangeText={text => {setConPassword (text)}}
                        style={styles.text_input}
                        secureTextEntry={true}
                        placeholder="Confirm Password"
                    />

                    {/* <Text style={[{ textAlign: "right", paddingHorizontal: 10, paddingTop: 8 }, styles.teal_text]}>Forgot Password?</Text> */}
                    <View style={[styles.button_wrapper, {paddingVertical: 20}]}>
                        <TouchableOpacity style={[styles.Register_button]} onPress={checkPW} >
                            <Text style={styles.white_text}>Register</Text>
                        </TouchableOpacity>
                        <View style={{ flexGrow: 1 }}></View>
                    </View>
                </View>
            </View>
            </ScrollView>
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
        marginTop: 20
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
    Register_button: {
        paddingHorizontal: 60,
        paddingVertical: 12,
        backgroundColor: "#11acba",
        marginTop: 10,
        marginBottom : 35,
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
    },
    gray_text: {
        color: "#7a7979"
    },
    black_text: {
        color: "#000000"
    },
    MainfontSize: {
        fontSize: 40
    },
    secondFont: {
        fontSize : 20,
        // justifyContent: "left",
        // alignItems: "left",
    }
});