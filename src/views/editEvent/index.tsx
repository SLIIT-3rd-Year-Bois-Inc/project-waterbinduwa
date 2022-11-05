import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import AddEventForm from '../../components/addEvent-form'
import AddPostAddImage from '../../components/addPost-addImage'

const EditEvent: React.FC<{ route: any }> = (props) => {

    const onPostButtonClick = () => { }
    return (
        <View style={styles.container}>

            <AddPostAddImage btnName="Add a Cover Image" />
            <AddEventForm />


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 5
    },

});

export default EditEvent;