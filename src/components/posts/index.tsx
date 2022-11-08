import React from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import Modal from '../model';
import PostEventHeader from '../post-event-header'
import PostReactionBar from './PostReactionBar';

function Post() {
    const [showModal, setShowModal] = React.useState(false)
    const onClose = ()=>{}
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

export default Post
