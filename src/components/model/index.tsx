

import React from 'react';
import {  View, StyleSheet,TouchableOpacity, useWindowDimensions } from 'react-native';


const BackDrop:React.FC<{onClose:()=>void}> = (props) =>{
    return <TouchableOpacity style={styles.backdrop} onPress={() => props.onClose()}/>
}

const ModalOverlay: React.FC<{children:React.ReactNode}> = (props) =>{
    return(
        <View style={styles.modal}>
            <View style={styles.content}>
               {props.children} 
            </View>
        </View>
    );
}

 const Modal:React.FC<{children:React.ReactNode, onClose:()=>void}> = (props) =>{
  return (
    <>
        <BackDrop onClose={props.onClose}/>
        <ModalOverlay>{props.children}</ModalOverlay>
      
    </>
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
    backdrop:{
        position:'absolute',
        top: 0,
        left:0,
        width:useWindowDimensions().width,
        height:useWindowDimensions().height,
        zIndex:20,
        backgroundColor:'#00000050'

    },
    modal:{
        position:'absolute',
        bottom:0,
        width:useWindowDimensions().width * 0.2,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        zIndex:30,

    },content:{

    }
});

export default Modal;