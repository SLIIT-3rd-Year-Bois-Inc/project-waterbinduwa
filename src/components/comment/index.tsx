import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";

const user_placeholder = require("./user-placeholder.png");

interface CommentProps {
    message?: string;
    name?: string;
    id?: string;
    image?: string;
    like?: boolean;
    disliked?: boolean;
}

export default function Comment({ message, name, image, id }: CommentProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profile_pic}
                source={image ? { uri: image } : user_placeholder} />
            <View style={styles.comment_container}>
                <Text style={[styles.black_text,styles.username]}>{ name || "Unknown Person"}</Text>
                <View style={styles.comment_text_container}>
                    <Text numberOfLines={5} style={styles.black_text}>{message || "Some Message"}</Text>
                </View>
                <View style={styles.icon_action_bar}>
                    <TouchableOpacity style={styles.icon_button}>
                        <AntIcon name="like2" size={20} style={styles.icon_right_padding} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon_button}>
                        <AntIcon name="dislike2" style={styles.icon_right_padding}  size={20} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon_button}>
                        <Icon name="reply"  size={20} color="#000000" />
                    </TouchableOpacity>
                    
                    <View style={styles.grow}></View>
                    <View><Text style={[styles.black_text, styles.time]}>Sat 2:00 PM</Text></View>
                    <TouchableOpacity style={styles.icon_button}>
                    <EntypoIcon name="dots-three-vertical"  size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20
    },
    profile_pic: {
        height: 80,
        width: 80,
        borderRadius: 100
    },
    username: {
        marginBottom: 10
    },
    black_text: {
        color: "black"
    },
    comment_container: {
        marginStart: 12,
        flexShrink: 1
    },
    comment_text_container: {
        padding: 10,
        backgroundColor: "#edf9f9",
        borderRadius: 10
    },
    icon_action_bar: {
        flexDirection: "row",
        padding: 1,
        marginLeft: 15,
        marginTop: 5
    },
    icon_right_padding: {
        paddingRight: 10
    },
    grow: {
        flexGrow: 1,
        flex: 3
    },
    icon_button: {
        padding: 2
    },
    time: {
        marginTop: 8,
        fontSize: 10,
        marginLeft: 10
    }
});