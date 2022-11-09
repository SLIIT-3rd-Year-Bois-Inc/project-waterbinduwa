import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import AddEventForm from '../../components/addEvent-form'
import AddPostAddImage from '../../components/addPost-addImage'
import EventPostNavBtns from '../../components/event-post-navBtns'

const AddEvent: React.FC<{ route: any }> = (props) => {
    const [image,setImage]=React.useState<any>();

    const onPostButtonClick = () => { }
    return (
        <View style={styles.container}>
            <EventPostNavBtns onShare={onPostButtonClick} routeName={props.route.name}/>

            <AddPostAddImage setImage={setImage} btnName="Add a Cover Image" />
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
