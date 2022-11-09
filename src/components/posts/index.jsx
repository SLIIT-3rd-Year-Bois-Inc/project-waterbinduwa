import React from 'react'
import { Text, View ,StyleSheet,Image} from 'react-native'
import PostEventHeader from '../post-event-header'
import EditDeleteOptions from './EditDeleteOptions';
import PostReactionBar from './PostReactionBar';

function Post(props) {
    const [showModal, setShowModal] = React.useState(false)
    const toggleModel = ()=>{setShowModal((showModal)=>!showModal)}
    return (
        <View style={styles.container}>
            <PostEventHeader toggleModel={toggleModel} id={props.data.id}/>
            <View><Text>{props.data.data().text}</Text></View>
            {props.data.data().images && <Image
               style={styles.postImage}
                source={{uri:props.data.data().images}}
            />}
        <PostReactionBar/>
        {showModal && <EditDeleteOptions  id={props.data.id} showModal={showModal} toggleModel={toggleModel}/>}

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
