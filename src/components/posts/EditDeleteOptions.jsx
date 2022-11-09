import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

function EditDeleteOptions(props) {
    const navigation = useNavigation();
    const width = useWindowDimensions().width * 0.5
    console.log("model",props.id);
    const goto_editPost = async () => {
      props.toggleModel();
      navigation.navigate("editPosts",{id:props.id});

  }
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.showModal}
        onRequestClose={() => {
          props.toggleModel();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
                style={{minWidth:width}}
              onPress={() => {
                goto_editPost();
                
                }}
            >
              <Text style={styles.modalText} >Edit</Text>
            </Pressable>
            <Pressable
                style={{minWidth:width}}
              onPress={() => props.toggleModel()}
            >
              <Text style={styles.modalText} >Delete</Text>
            </Pressable>
            <Pressable
                style={{minWidth:width}}
              onPress={() => props.toggleModel()}
            >
              <Text style={styles.modalText} >Cancle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      paddingTop:10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    }
  });
export default EditDeleteOptions
