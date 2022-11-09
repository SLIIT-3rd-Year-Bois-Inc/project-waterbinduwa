import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ImageBackground } from "react-native";
const logo = require("../../assets/logo.png");
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AboutUs from "./comp/aboutus";
import Posts from "./comp/posts";
import Reviews from "./comp/reviews";
import { baseGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon";


export default function OrgHome() {
    const navigation = useNavigation();

    const title = "Rotoract Club OF";
    const subTitle = "Sri Lanka Institute of Information Technology";

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

    const add_post = () => {
        navigation.navigate("addPosts");
    }
   
    
    return (
        <View>
            <ScrollView>
            
            <ImageBackground source={require('./bg.png')} resizeMode="cover" >
            <Image source={require('./dp.png')} style={{ width: 110, height: 110, marginVertical: 20 , marginLeft : 150}} />
            <View >
            <Text style={[styles.MainfontSize, styles.black_text, {fontWeight: "bold", marginLeft : 70, color : "white"}]}>{title}</Text>
            <Text style={[styles.MainfontSize, styles.black_text, {fontWeight: "bold", marginLeft : 20, fontSize : 20, color : "white"}]}>{subTitle}</Text>
                <View style={[styles.container1, {flexDirection: "row"}]}>
                
                    <View style={[styles.button_wrapper, {flex: 1}]}>
                            <TouchableOpacity style={[styles.headButton]}  >
                                <Text style={styles.white_text}>Edit</Text>
                            </TouchableOpacity>
                            
                    </View>
                    <View style={[styles.button_wrapper, {flex: 1, marginRight : 50}]}>
                        <TouchableOpacity style={[styles.headButton]} onPress={add_post} >
                            <Text style={{fontSize: 20, color: "white"}}>Post</Text>
                        </TouchableOpacity>
                        <View style={{ flexGrow: 1 }}></View>
                    </View>
                </View>
            </View>

            </ImageBackground>

            
              

            <View style={styles.top2}>
                <View style={[styles.button_wrapper]}>
                    <TouchableOpacity style={[styles.Register_button]}   >
                        <Text style={styles.white_text}>Messages</Text>
                    </TouchableOpacity>
                    <View style={{ flexGrow: 1 }}></View>
                </View>

                <View style={[styles.container2, {flexDirection: "row"}]}>
                    {aboutUs ? 
                    <View style={{ flex: 1, backgroundColor: "#2D9AA3", padding : 20, marginLeft : 5, borderRadius : 30, borderStyle : "solid", borderWidth : 2, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={do_about} >
                        <Image source={require('./buttons/about.png')} style={{ width: 60, height: 70 ,}} />
                        <Text>About us</Text>
                        </TouchableOpacity>
                    </View >
                    : 
                    <View style={{ flex: 1, backgroundColor: "#85C9CE", padding : 20, marginLeft : 5, borderRadius : 30,  justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={do_about} >
                        <Image source={require('./buttons/about.png')} style={{ width: 60, height: 70 ,}} />
                        <Text>About us</Text>
                        </TouchableOpacity>
                    </View >
                    }

                    {posts ? 
                    <View style={{ flex: 1, backgroundColor: "#2D9AA3", padding : 20, marginLeft : 5, borderRadius : 30, borderStyle : "solid", borderWidth : 2, justifyContent: "center", alignItems: "center" }} onPress={do_post}>
                    <TouchableOpacity onPress={do_post} >
                    <Image source={require('./buttons/posts.png')} style={{ width: 60, height: 70 }} />
                    <Text style={{alignItems:"center"}}>Posts</Text>
                    </TouchableOpacity>
                    </View>
                    :
                    <View style={{ flex: 1, backgroundColor: "#85C9CE", padding : 20, marginLeft : 5, borderRadius : 30 , justifyContent: "center", alignItems: "center"  }} onPress={do_post}>
                        <TouchableOpacity onPress={do_post} >
                        <Image source={require('./buttons/posts.png')} style={{ width: 60, height: 70 }} />
                        <Text style={{alignItems:"center"}}>Posts</Text>
                        </TouchableOpacity>
                    </View>
                    }

                    {reviews ?
                    <View style={{ flex: 1, backgroundColor: "#2D9AA3", padding : 20, marginLeft : 5, borderRadius : 30, borderStyle : "solid", borderWidth : 2, justifyContent: "center", alignItems: "center"}} onPress={do_review}>
                    <TouchableOpacity onPress={do_review} >
                    <Image source={require('./buttons/rev.png')} style={{ width: 60, height: 70 }} />
                    <Text>Reviews</Text>
                    </TouchableOpacity>
                    </View>
                    :
                    <View style={{ flex: 1, backgroundColor: "#85C9CE", padding : 20, marginLeft : 5, borderRadius : 30 , justifyContent: "center", alignItems: "center" }} onPress={do_review}>
                    <TouchableOpacity onPress={do_review} >
                    <Image source={require('./buttons/rev.png')} style={{ width: 60, height: 70 }} />
                    <Text>Reviews</Text>
                    </TouchableOpacity>
                    </View>
                    }

                    

                    
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
    container1: {
        flex: 0,
        padding: 10,
    },
    container2: {
        flex: 0,
        padding: 10,
        paddingBottom : 50
    },
    top: {
        backgroundColor : "#41A7B5"
    },
    top2: {
        backgroundColor : "#DAF4F7"
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
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: "#0A656D",
        marginTop: 10,
        marginBottom : 12,
        marginLeft: 10,
        color: "white",
        borderRadius: 30
    },
    headButton: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: "#00373C",
        marginTop: 10,
        marginBottom : 35,
        marginLeft: 80,
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
    },
    center : {
        justifyContent: "center",
        alignItems: "center",
    },
});