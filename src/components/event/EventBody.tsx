import React from 'react';
import { StyleSheet, View, Text, Pressable, Linking } from 'react-native';


function EventBody(props:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.time}>
                {(new Date(props.data.data().timestamp.seconds)).toString()}
            </Text>

            <Text style={styles.title}>
                {props.data.data().title}
            </Text>
            <Text style={styles.link}>
                Link:<Text
                    style={styles.hyperlinkStyle}
                    onPress={() => {
                        Linking.openURL(props.data.data().link);
                    }}>
                    https://www.google.com/
                </Text>
            </Text>
            <Text style={styles.description}>
                <Text style={styles.descriptionD}>
                    {props.data.data().desc}
                </Text>
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    time: {
        color: 'black'
    }, title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        width: '100%',
        display: 'flex',
        textAlign: 'center',

    }, link: {
        color: 'black',
        fontSize: 16,
        fontWeight:'bold'
    }, description: {
        color: 'black',
        fontWeight:'bold',
        fontSize: 16,
    },
    descriptionD:{
        fontWeight:'400',
        marginLeft:10
       
    },
    hyperlinkStyle: {
        color: 'blue',
    }

});

export default EventBody
