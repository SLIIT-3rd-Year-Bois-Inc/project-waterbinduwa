import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import AntIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
interface AddReviewProps {
    name?: string;
}

export default function AddReview({ name }: AddReviewProps) {
    const [images, setImages ] = useState<any[]>([]);
    
    const select_image = async () => {
        let result = await launchImageLibrary({
            mediaType:"photo"
        });

        console.log(result);
        if(!result.didCancel) {
            if(result.assets && result.assets.length > 0){
                let image = result.assets[0];
                // Add image to the images array
                setImages(prev => [...prev, image.uri]);
            }
        }

        console.log(result);
    }

    return (
        <ScrollView>
            <View style={styles.top_bar}>
                <View>
                    <Text>Write  something about</Text>
                    <Text style={styles.name}>{name ?? "Some Foundation"}</Text>
                </View>
                <View style={styles.grow}></View>
                <TouchableOpacity style={styles.close_btn}>
                        <AntIcon name="close"  size={20} color="#000000" />
                    </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={add_btn_styles.container} onPress={select_image}>
                    <Text>Add Images</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    top_bar: {
        padding: 20,
        flexDirection: "row"
    },
    black_text: {
        color: "black"
    },
    name: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20
    },
    close_btn: {
        padding: 10,
    },
    grow: {
        flexGrow: 1
    },
    container: {
        paddingHorizontal: 20,
    },
})

const add_btn_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#11acba",
    }
});