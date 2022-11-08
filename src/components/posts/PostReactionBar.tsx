import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


function PostReactionBar() {
    const handleshareClick = () => { };
    return (

        <View style={styles.container} >
            <View style={styles.reactions}>
                <View style={styles.reaction}><Icon name="heart" size={20} color="black" /><Text style={styles.count}>5</Text></View>
                <View style={styles.reaction}><Icon name="thumbs-up" size={20} color="black" /><Text style={styles.count}>5</Text></View>
                <View style={styles.reaction}><Icon name="thumbs-down" size={20} color="black" /><Text style={styles.count}>5</Text></View>

            </View>
            <View style={styles.commentShare}>
                <View style={styles.reaction}><MaterialIcon name="comment-outline" size={20} color="black" /><Text style={styles.count}>5</Text></View>
                <Pressable
                    onPress={handleshareClick}
                    style={styles.shareBtn}
                ><Text style={styles.sharebtnText}>
                        Share
                    </Text>

                </Pressable>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'white'
    },
    reactions: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10
    },
    commentShare: {
        display: 'flex',
        flexDirection: 'row'
    },
    count: {
        padding: 2
    }
    , reaction: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    }, shareBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 5,
        marginRight: 10,
        backgroundColor: '#11ACBA',
        borderRadius: 20
    }, sharebtnText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default PostReactionBar
