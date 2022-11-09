import React from 'react'
import { Text, View, StyleSheet, Button, Pressable, TextInput,ToastAndroid } from 'react-native'
import { uploadFile } from "../../utils/firebase_storage";
import firestore from '@react-native-firebase/firestore';

import AddPostAddImage from '../../components/addPost-addImage';
import EventPostNavBtns from '../../components/event-post-navBtns';
import { useNavigation } from "@react-navigation/native";



const AddPosts:React.FC<{route:any}>=(props)=> {
  const [text, onChangeText] = React.useState('');
  const [images,setImages] = React.useState<any>('')
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<any>(false);

  const showToastWithGravity = (thiserror:any) => {
    ToastAndroid.showWithGravity(
      thiserror,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  setError('');
  };
  const goto_home = () => {
    navigation.navigate("MainHome" as never);
  }
  const navigation = useNavigation();
  const savePost=async() =>{
    if(text==='' && !images){
      showToastWithGravity('please add an image or text...');
      return
    }

    showToastWithGravity('sending...');

    try {
      // Save all images to the storage
      let urls:any='';
      if(images){
      let uploadTasks =async () => { 
          let uri = images.uri;
          if(uri) {
              const response = await fetch(uri);
              const blobFile = await response.blob();
              return await uploadFile(blobFile);
          }
          
       }
      
       urls= await uploadTasks();
      }
      let document = {
          images: urls,
          type:"post",
          text: text,
          reactions:{
            love:0,
            like:0,
            dislike:0
          },
          uid: "1", // TODO - Add firebase auth uid,
           timestamp:new Date()// TODO - Add org id
      }
      console.log("working")
      await firestore().collection("postsAndEvents").add(document);
      console.log("added")
      goto_home();
      
    
  
  } catch (e) {
      console.error(e);
      showToastWithGravity('somthing went wrong...');
      setIsLoading(false)
  }
  }
  return (
    <View style={styles.container}>
      <EventPostNavBtns onShare={savePost} routeName={props.route.name} />
      {isLoading && <View style={styles.isloadingView}><Text style={styles.isloadingText}>Sharing...</Text></View>}
      <TextInput
        multiline
        numberOfLines={8} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={500}
        onChangeText={text => onChangeText(text)}
        value={text}
        style={styles.textArea}
        placeholder='What is on your mind...'
      />
      <AddPostAddImage uri={images}setImage={setImages} btnName="Add an Image"/>
      
      

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
  },isloadingView:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
  },
  isloadingText:{
  }
  
});

export default AddPosts;
