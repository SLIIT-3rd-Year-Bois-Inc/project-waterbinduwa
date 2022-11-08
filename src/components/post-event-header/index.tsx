import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function PostEventHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.imageNameContainer}>
                <View style={styles.imageContainer}>

                </View>
                <View>
                    <Text style={styles.userName}>This is Name</Text>
                    <Text style={styles.date}>1 day ago</Text>
                </View>

            </View>

            <View>
                <Text style={styles.ellipsis}>
                    <Icon name="ellipsis-h" size={20} color="#000" />
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    imageNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'

    }
    , imageContainer: {
        backgroundColor: 'blue',
        height: 40,
        width: 40,
        margin: 10,
        borderRadius: 20
    },
    userName: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    date: {
        color: 'black'
    },
    ellipsis:{
        marginRight:6
    }
});

export default PostEventHeader;
