import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import PostEventHeader from '../post-event-header'
import EventBody from './EventBody';
import EventReactionBar from './EventReactionBar';

function Event(props) {
    return (
        <View style={styles.container}>
            <PostEventHeader />
            {props.data.data().images && <Image
                style={styles.postImage}
                source={{uri:props.data.data().images}}
            />}
            <EventBody data={props.data}/>
            <EventReactionBar/>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        borderBottomColor:'#a1a1a1',
        borderBottomWidth:1,
        marginBottom:6,
        backgroundColor:'white'
    },
    postImage:{
       width:'100%',
       height:300       
    }
});

export default Event
