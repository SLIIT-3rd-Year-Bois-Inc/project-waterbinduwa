import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, TextInput, Image, Pressable } from "react-native";
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-vector-icons/FontAwesome';
import { uploadFile } from "../../utils/firebase_storage";
import firestore from '@react-native-firebase/firestore';
interface AddReviewProps {
    name?: string;
}

export default function AddReview({ name }: AddReviewProps) {
    const [images, setImages] = useState<Asset[]>([]);
    const [text, setText] = useState<string>();

    const select_image = async () => {
        let result = await launchImageLibrary({
            mediaType: "photo"
        });

        console.log(result);
        if (!result.didCancel) {

            if (result.assets) {
                let image = result.assets[0];
                console.log(image, "image")
                // Add image to the images array
                setImages(prev => [...prev, image]);
            }
        }

        console.log(result);
    }

    const save_review = async () => {
        try {
            // Save all images to the storage
            console.log("image",images);
            return
            let uploadTasks = images.map(async (image) => { 
                let uri = image.uri;
                if(uri) {
                    const response = await fetch(uri);
                    const blobFile = await response.blob();
                    return await uploadFile(blobFile);
                }
                
             });
            let urls = await Promise.all(uploadTasks);
            let document = {
                images: urls,
                description: text,
                uid: "", // TODO - Add firebase auth uid,
                org_id: "" // TODO - Add org id
            }

            await firestore().collection("reviews").add(document);
        } catch (e) {
            console.error(e);
        }
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
                    <AntIcon name="close" size={20} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.label}>Write a review</Text>
                <TextInput
                    multiline
                    editable
                    numberOfLines={4}
                    onChangeText={text => setText(text)}
                    value={text}
                    style={styles.text_input}
                />
                <View>
                    <Pressable
                        onPress={select_image}
                        style={styles.addImageBtn}
                    ><Icon name="image" size={20} color="#fff" /><Text style={[styles.btnText, styles.addImageBtnTxt]}>
                            Add Image
                        </Text>

                    </Pressable>
                </View>
                <TouchableOpacity style={styles.post_btn} onPress={save_review} >
                    <Text style={styles.post_btn_text}>Post</Text>
                </TouchableOpacity>
                {images.map((image, index) => <Image key={index} source={{ uri: image.uri }} style={styles.image} />)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    top_bar: {
        padding: 20,
        flexDirection: "row"
    },
    post_btn: {
        paddingHorizontal: 60,
        paddingVertical: 12,
        backgroundColor: "#11acba",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        borderRadius: 100,
        marginTop: 5
    },
    black_text: {
        color: "black"
    },
    post_btn_text: {
        fontWeight: "bold",
        color: "white"
    },
    white_text: {
        color: "white"
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
    text_input: {
        padding: 20,
        borderColor: "#11acba",
        borderRadius: 20,
        borderWidth: 2,
        marginBottom: 10,
    },
    label: {
        color: "#11acba",
        paddingLeft: 10,
        marginBottom: 5
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },

    addImageBtnContainer: {
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    addImageBtn: {
        borderRadius: 20,
        paddingTop: 8,
        paddingRight: 20,
        paddingBottom: 8,
        paddingLeft: 20,
        backgroundColor: '#16DAED',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addImageBtnTxt: {
        paddingLeft: 6
    },
    image: {
        height: 300,
        width: '100%'
    },
    post_button: {

    }
})

/* const add_btn_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#11acba",
        width: 120,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        paddingVertical: 10,
        borderRadius: 100
    },
    text: {
        color: "white"
    }
}); */