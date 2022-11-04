import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Comment() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profile_pic}
                source={{
                    uri: "https://i1.sndcdn.com/artworks-Lz9NghSon8zoYyaG-OG8QPA-t500x500.jpg"
                }} />
            <View style={styles.comment_container}>
                <Text style={[styles.black_text,styles.username]}>Dehemi Weerakkody</Text>
                <View style={styles.comment_text_container}>
                    <Text numberOfLines={5} style={styles.black_text}>ddddddddddde fasf fasdf     feaffadfadfs fdasfadfadf dfadfadfafdafdasd   fasfsdf</Text>
                </View>
                <View>
                <Icon name="rocket" size={30} color="#900" />
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
    }
});