import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AboutUs from "./comp/aboutus";
import Posts from "./comp/posts";
import Reviews from "./comp/reviews";

export default function OrgHome() {
    const navigation = useNavigation();

    const title = "ROTO OF SLIIT";

    const [aboutUs, setAboutUs] = useState(true);
    const [posts, setPosts] = useState(false);
    const [reviews, setReviews] = useState(false);
    
    const do_about = async () => {
        setAboutUs(true);
        setPosts(false);
        setReviews(false);
    }
    const do_post = async () => {
        setAboutUs(false);
        setPosts(true);
        setReviews(false);
    }
    const do_review = async () => {
        setAboutUs(false);
        setPosts(false);
        setReviews(true);
    }
    
    return (
        <View>
            <ScrollView>
            
            <View style={styles.top}>
            <Text style={[styles.MainfontSize, styles.black_text]}>{title}</Text>
                <View style={[styles.container2, {flexDirection: "row"}]}>
                
                    <View style={[styles.button_wrapper, {flex: 1}]}>
                            <TouchableOpacity style={[styles.Register_button]}  >
                                <Text style={styles.white_text}>Edit</Text>
                            </TouchableOpacity>
                            <View style={{ flexGrow: 1 }}></View>
                    </View>
                    <View style={[styles.button_wrapper, {flex: 1}]}>
                        <TouchableOpacity style={[styles.Register_button]}  >
                            <Text style={styles.white_text}>Post</Text>
                        </TouchableOpacity>
                        <View style={{ flexGrow: 1 }}></View>
                    </View>
                </View>
            </View>
              

            <View style={styles.top2}>
                <View style={[styles.button_wrapper]}>
                    <TouchableOpacity style={[styles.Register_button]}  >
                        <Text style={styles.white_text}>Messages</Text>
                    </TouchableOpacity>
                    <View style={{ flexGrow: 1 }}></View>
                </View>

                <View style={[styles.container2, {flexDirection: "row"}]}>
                    <View style={{ flex: 1, backgroundColor: "teal", padding : 20, marginLeft : 5 }}>
                        <TouchableOpacity onPress={do_about} >
                        <Image source={require('./buttons/about.png')} style={{ width: 95, height: 95 }} />
                        <Text>About us</Text>
                        </TouchableOpacity>
                    </View >

                    <View style={{ flex: 1, backgroundColor: "teal", padding : 20, marginLeft : 5   }} onPress={do_post}>
                        <TouchableOpacity onPress={do_post} >
                        <Image source={require('./buttons/posts.png')} style={{ width: 95, height: 95}} />
                        <Text>Posts</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, backgroundColor: "teal", padding : 20, marginLeft : 5  }} onPress={do_review}>
                        <TouchableOpacity onPress={do_review} >
                        <Image source={require('./buttons/rev.png')} style={{ width: 95, height: 95 }} />
                        <Text>Reviews</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>

            {aboutUs ? <AboutUs /> : ""}
            {posts ? <Posts /> : ""}
            {reviews ? <Reviews /> : ""}
            
              
            </ScrollView>
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
        backgroundColor : "gray"
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
    secondFont: {
        fontSize : 20,
        // justifyContent: "left",
        // alignItems: "left",
    }
});