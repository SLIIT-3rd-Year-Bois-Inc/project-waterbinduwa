import React from 'react';
import { StyleSheet, View, Text, Pressable, Linking } from 'react-native';


function EventBody() {
    const time = (new Date("2022-03-25")).toString()
    return (
        <View style={styles.container}>
            <Text style={styles.time}>
                {time}
            </Text>

            <Text style={styles.title}>
                Titile
            </Text>
            <Text style={styles.link}>
                Link:<Text
                    style={styles.hyperlinkStyle}
                    onPress={() => {
                        Linking.openURL('https://www.google.com/');
                    }}>
                    https://www.google.com/
                </Text>
            </Text>
            <Text style={styles.description}>
                Description: 
                <Text style={styles.descriptionD}>
                    the event description
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
