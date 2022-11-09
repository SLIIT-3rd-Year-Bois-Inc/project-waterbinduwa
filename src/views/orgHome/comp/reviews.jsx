import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function Reviews() {
    const navigation = useNavigation();

    const para = "Reviews";

    const add_rev = () => {
        navigation.navigate("addReview");
    }
   

    return (
        <View>

            <View style={[ {flexDirection: "row", paddingBottom : 20}]}>

            <View style={[styles.button_wrapper, {flex: 6}]}>
            <Text style={{paddingLeft : 20, paddingTop : 15, color : "black", fontSize : 25, fontWeight : "bold"}}>Reviews</Text>
            </View>

            <View style={[styles.button_wrapper, {flex: 1}]}>
                <TouchableOpacity onPress={add_rev} style={{paddingTop : 8 }}>
                            <Image source={require('./plus.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
            </View>
            </View> 


            <View style={[styles.top, {marginBottom : 15}]}>
            <Text style={{paddingLeft : 20, paddingTop : 15, color : "black", fontSize : 20, fontWeight : "bold"}}>Review by : Linda Stirling</Text>
            <Text style={{paddingLeft : 20, paddingRight:10, paddingBottom : 30,  paddingTop : 17, color : "black", fontSize : 17}}>Rotaract originally began as a Rotary International youth program in 1968 at Charlotte North Rotary Club in Charlotte, North Carolina, United States, and has grown into a major organization of 10,680 clubs spread around the world and over 203,000.</Text>
            </View>

            <View style={[styles.top, {marginBottom : 15}]}>
            <Text style={{paddingLeft : 20, paddingTop : 15, color : "black", fontSize : 20, fontWeight : "bold"}}>Review by : Linda Stirling</Text>
            <Text style={{paddingLeft : 20, paddingRight:10, paddingBottom : 30,  paddingTop : 17, color : "black", fontSize : 17}}>Rotaract originally began as a Rotary International youth program in 1968 at Charlotte North Rotary Club in Charlotte, North Carolina, United States, and has grown into a major organization of 10,680 clubs spread around the world and over 203,000.</Text>
            </View>

            <View style={[styles.top, {marginBottom : 15}]}>
            <Text style={{paddingLeft : 20, paddingTop : 15, color : "black", fontSize : 20, fontWeight : "bold"}}>Review by : Linda Stirling</Text>
            <Text style={{paddingLeft : 20, paddingRight:10, paddingBottom : 30,  paddingTop : 17, color : "black", fontSize : 17}}>Rotaract originally began as a Rotary International youth program in 1968 at Charlotte North Rotary Club in Charlotte, North Carolina, United States, and has grown into a major organization of 10,680 clubs spread around the world and over 203,000.</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    container2: {
        flex: 0,
        padding: 10,
    },
    top: {
        backgroundColor : "#c1dedd"
    },
    top2: {
        backgroundColor : "pink"
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
});