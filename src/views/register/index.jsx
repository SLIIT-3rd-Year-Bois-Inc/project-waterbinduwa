import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity , ToastAndroid} from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function OrgRegister() {
    const [orgName, setOrgName] = useState("");
    const [intro, setIntro] = useState("");
    const [orgEmail, setOrgEmail] = useState("");
    const [orgPhone, setOrgPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [username, setUserName] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();


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

    const register = async () => {
        try {            
            let document = {
                orgName : orgName,
                intro : intro,
                orgEmail : orgEmail,
                orgPhone : orgPhone,
                website : website,
                address : address,
                username : username,
                position : position,
                email : email,
                phone : phone,
                password : password,
                uid: "", // TODO - Add firebase auth uid,
                org_id: "" // TODO - Add org id
            }

            await firestore().collection("orgPerson").add(document);
        } catch (e) {
            console.error(e);
        }
    }

  
    
    return (
        <View>
            <ScrollView>
            <View style={styles.logo_container}>
              <Text style={[styles.MainfontSize, styles.gray_text]}>Register Org. or Club</Text>
              <Text style={[styles.secondFont, styles.black_text]}>Give us some details about yourself so we can identify you.</Text>
           
                <View style={styles.form}>

                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Organisation or club name</Text>
                        <TextInput value={orgName} onChangeText={text => {setOrgName(text)}} style={styles.text_input} placeholder="Enter Details" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Introduction</Text>
                        <TextInput value={intro} onChangeText={text => {setIntro(text)}} style={styles.text_input} placeholder="Introduction" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Email of org. or club</Text>
                        <TextInput value={orgEmail} onChangeText={text => {setOrgEmail(text)}} style={styles.text_input} placeholder="Email" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Phone of org. or club</Text>
                        <TextInput value={orgPhone} onChangeText={text => {setOrgPhone(text)}} style={styles.text_input} placeholder="Phone" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Website</Text>
                        <TextInput value={website} onChangeText={text => {setWebsite(text)}} style={styles.text_input} placeholder="Website" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Address</Text>
                        <TextInput value={address} onChangeText={text => {setAddress(text)}} style={styles.text_input} placeholder="Address" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Your position</Text>
                        <TextInput value={position} onChangeText={text => {setPosition(text)}} style={styles.text_input} placeholder="Position" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Your Name</Text>
                        <TextInput value={username} onChangeText={text => {setUserName(text)}} style={styles.text_input} placeholder="Your Name" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Your Email</Text>
                        <TextInput value={email} onChangeText={text => {setEmail(text)}} style={styles.text_input} placeholder="Your Email" />
                    </View>
                    <View style={{ paddingVertical: 5 }}>
                        <Text style={[styles.label_padding, styles.teal_text]}>Your Phone</Text>
                        <TextInput value={phone} onChangeText={text => {setPhone(text)}} style={styles.text_input} placeholder="your phone" />
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