import React from 'react'
import { View ,Text,StyleSheet,Pressable} from 'react-native'
import AddPostAddImage from '../../components/addPost-addImage'

function AddEvent() {
    const onPostButtonClick=()=>{}
  return (
    <View style={styles.container}>
        <View style={styles.postEventBtnContainer}>
        <Pressable
          onPress={onPostButtonClick}
          style={styles.postButton}
        ><Text style={styles.btnText}>Post</Text>

        </Pressable>
        <Pressable
          onPress={onPostButtonClick}
          style={styles.eventButton}
        ><Text style={styles.btnText}>Event</Text>

        </Pressable>


      </View>
       
        <AddPostAddImage btnName="Add a Cover Image"/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      padding: 5
    },
    eventButton: {
      borderTopRightRadius: 15,
      backgroundColor: '#16DAED',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 4,
      paddingBottom: 4,
      borderLeftColor: 'white',
      borderLeftWidth: 1
    }
    ,
    postButton: {
      borderBottomLeftRadius: 15,
      backgroundColor: '#16DAED',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 4,
      paddingBottom: 4
    },
    btnText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize:16
    },
    postEventBtnContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    textArea: {
      display: 'flex',
      maxHeight: '50%',
      justifyContent: 'flex-start',
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#C5C5C547',
    },
    
  });

export default AddEvent
