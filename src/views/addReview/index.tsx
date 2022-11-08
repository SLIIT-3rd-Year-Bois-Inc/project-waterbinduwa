import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';

interface AddReviewProps {
    name?: string;
}

export default function AddReview({ name }: AddReviewProps) {
    const [images, setImages ] = useState([]);
    
    const select_image = async () => {
        let result = await launchImageLibrary({
            mediaType:"photo"
        });
        console.log(result);
    }

    return (
        <ScrollView>
            <View>
                <View>
                    <Text>Write  something about</Text>
                    <Text style={styles.name}>{name ?? "Some Foundation"}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={select_image}>
                <Text>Add Images</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    black_text: {
        color: "black"
    },
    name: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20
    }
})