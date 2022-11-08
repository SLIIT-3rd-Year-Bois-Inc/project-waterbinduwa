import React from 'react';
import { StyleSheet, View, Text, Pressable,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


function EventReactionBar() {
    const handleshareClick = () => { };
    return (

        <View style={styles.container} >
            <View style={styles.reactions}>
                <TouchableOpacity
                    onPress={handleshareClick}
                    style={styles.reactionBtn}
                >

                    <Text style={styles.reactionText}>
                        Interested
                    </Text>
                    <Text style={styles.reactionCount}>
                        11
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleshareClick}
                    style={styles.reactionBtn}
                >

                    <Text style={styles.reactionText}>
                    Will attend
                    </Text>
                    <Text style={styles.reactionCount}>
                        11
                    </Text>

                </TouchableOpacity>
            </View>
            <View style={styles.commentShare}>
                <TouchableOpacity style={styles.reaction}><MaterialIcon name="comment-outline" size={20} color="black" /><Text style={styles.count}>5</Text></TouchableOpacity>
                <TouchableOpacity
                    onPress={handleshareClick}
                    style={styles.shareBtn}
                ><Text style={styles.sharebtnText}>
                        Share
                    </Text>

                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems:'center'
    },
    reactions: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 1
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
        paddingLeft: 15,
        paddingRight: 15,
        margin: 5,
        marginRight: 10,
        backgroundColor: '#11ACBA',
        borderRadius: 20,
        height:40
    }, sharebtnText: {
        color: 'white',
        fontWeight: 'bold'
    }
    , reactionBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,
        margin: 5,
        marginRight: 5,
        backgroundColor: '#16DAED',
        borderRadius: 20
    }, reactionText: {
        color: 'white',
        fontWeight: 'bold'
    }, reactionCount: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft:6,
        backgroundColor:'#11ACBA',
        borderRadius:10,
        padding:2
    }
});

export default EventReactionBar
