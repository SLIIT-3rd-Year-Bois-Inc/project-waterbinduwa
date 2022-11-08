import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import AddEventForm from '../../components/addEvent-form'
import AddPostAddImage from '../../components/addPost-addImage'
import EventPostNavBtns from '../../components/event-post-navBtns'

const AddEvent: React.FC<{ route: any }> = (props) => {

    const onPostButtonClick = () => { }
    return (
        <View style={styles.container}>
            <EventPostNavBtns routeName={props.route.name}/>

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

export default AddEvent
