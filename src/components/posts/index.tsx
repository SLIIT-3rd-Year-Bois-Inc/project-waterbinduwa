import React from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import PostEventHeader from '../post-event-header'
import PostReactionBar from '../post-reaction-bar/PostReactionBar';

function Post() {
    return (
        <View style={styles.container}>
            <PostEventHeader />
            <Image
               style={styles.postImage}
                source={{uri:'https://www.unicef.org/mena/sites/unicef.org.mena/files/styles/hero_desktop/public/What-we-do_MENA_WASH_Block01.jpg?itok=wpUH04-V'}}
            />
            <PostReactionBar/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        borderColor:'#2d2d2d',
        borderWidth:1,
        marginBottom:1
    },
    postImage:{
       width:'100%',
       height:300       
    }
});

export default Post
