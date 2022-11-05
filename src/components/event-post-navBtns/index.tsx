import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const EventPostNavBtns: React.FC<{ routeName: string }> = (props) => {
    const navigation = useNavigation();
    const onPostButtonClick=()=>{
        navigation.navigate("addPosts" as never);
    }
    const onEventButtonClick=()=>{
        navigation.navigate("addEvent" as never);
    }
    return (
        <View style={styles.postEventBtnContainer}>
            <Pressable
                disabled = {!(props.routeName === 'addEvent')}
                onPress={onPostButtonClick}
                style={(props.routeName === 'addEvent')?styles.postButton :[styles.postButton, styles.clickedBtn]}
            ><Text style={styles.btnText}>Post</Text>

            </Pressable>
            <Pressable
            disabled = {(props.routeName === 'addEvent')}
                onPress={onEventButtonClick}
                style={(props.routeName === 'addEvent')?[styles.eventButton,styles.clickedBtn] :styles.eventButton}
            ><Text style={styles.btnText}>Event</Text>

            </Pressable>


        </View>
    )
}
const styles = StyleSheet.create({
    eventButton: {
        borderTopRightRadius: 15,
        backgroundColor: '#16DAED',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 4,
        paddingBottom: 4,
        borderLeftColor: 'white',
        borderLeftWidth: 1
    }
    ,
    postButton: {
        borderBottomLeftRadius: 15,
        backgroundColor: '#16DAED',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 4,
        paddingBottom: 4
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    postEventBtnContainer: {
        display: 'flex',
        flexDirection: 'row'
    },clickedBtn:{
        backgroundColor: '#16DAED77',
    }
});
export default EventPostNavBtns
