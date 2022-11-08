import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import PostEventHeader from '../post-event-header'
import EventBody from './EventBody';
import EventReactionBar from './EventReactionBar';

function Event() {
    return (
        <View style={styles.container}>
            <PostEventHeader />
            <Image
                style={styles.postImage}
                source={{ uri: 'https://www.unicef.org/mena/sites/unicef.org.mena/files/styles/hero_desktop/public/What-we-do_MENA_WASH_Block01.jpg?itok=wpUH04-V' }}
            />
            <EventBody/>
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
