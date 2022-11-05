import React from 'react'
import { Text, View, StyleSheet, Button, Pressable, TextInput } from 'react-native'

import AddPostAddImage from '../../components/addPost-addImage';
import EventPostNavBtns from '../../components/event-post-navBtns';


const AddPosts:React.FC<{route:any}>=(props)=> {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  const onPostButtonClick = () => { }
  return (
    <View style={styles.container}>
      <EventPostNavBtns routeName={props.route.name} />

      <TextInput
        multiline
        numberOfLines={8} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={500}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.textArea}
        placeholder='What is on your mind...'
      />
      <AddPostAddImage btnName="Add an Image"/>
      
      

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

export default AddPosts
