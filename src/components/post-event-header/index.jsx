import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


function PostEventHeader(props) {


    const handleshareClick=()=>{

    }
   
    console.log(props.id)
    return (
        <View style={styles.container}>
            <View style={styles.imageNameContainer}>
                <View style={styles.imageContainer}>

                </View>
                <TouchableOpacity>
                    <Text style={styles.userName}>This is Name</Text>
                    <Text style={styles.date}>1 day ago</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={()=>{props.toggleModel()}} id={props.id}>
                <Text style={styles.ellipsis}>
                    <Icon name="ellipsis-h" size={20} color="#000" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imageNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    }
    , imageContainer: {
        backgroundColor: 'blue',
        height: 40,
        width: 40,
        margin: 10,
        borderRadius: 20
    },
    userName: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    date: {
        color: 'black'
    },
    ellipsis:{
        marginRight:6
    }
});

export default PostEventHeader;
