import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function RegPicker() {
    const navigation = useNavigation();

    const goto_oc = () => {
        navigation.navigate("orgRegister");
    }

    const goto_vd = () => {
        navigation.navigate("volRegister");
    }
    
    return (
        <View>
            <View style={styles.logo_container}>
              <Text style={[styles.MainfontSize, styles.gray_text]}>Register</Text>

                <View style={styles.form}>
   
                    <View style={[styles.button_wrapper]}>
                        <TouchableOpacity onPress={goto_oc} >
                            <Image source={require('./oc.png')} style={{ width: 300, height: 233, marginVertical: 20 }} />
                        </TouchableOpacity>
                        <View style={{ flexGrow: 1 }}></View>
                    </View>

                    <View style={[styles.button_wrapper]}>
                        <TouchableOpacity onPress={goto_vd} >
                            <Image source={require('./VD.png')} style={{ width: 300, height: 247, marginVertical: 20 }} />
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