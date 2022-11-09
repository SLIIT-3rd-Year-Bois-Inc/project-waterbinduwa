import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button, Pressable, TextInput,ToastAndroid } from 'react-native'

import AddPostAddImage from '../../components/addPost-addImage';
import { uploadFile } from "../../utils/firebase_storage";
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";


const EditPosts: React.FC<{ route: any }> = (props) => {

  const [text, onChangeText] = React.useState('');
  const [image, setImage] = React.useState<any>({uri:''});
  console.log(">>>>in edit", props.route.params.id);


  useEffect(() => {
    const cityRef = firestore().collection('postsAndEvents').doc(props.route.params.id);
    cityRef.get().then((doc)=>{
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        onChangeText(doc.data()!.text);
        setImage({uri:doc.data()!.images});
      }
    });
    

  },[])


  const showToastWithGravity = (thiserror:any) => {
    ToastAndroid.showWithGravity(
      thiserror,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };
  const goto_home = () => {
    navigation.navigate("MainHome" as never,{true:true} as never);
  }
  const navigation = useNavigation();
  const savePost=async() =>{
    if(text==='' && !image){
      showToastWithGravity('please add an image or text...');
      return
    }

    showToastWithGravity('sending...');

    try {
      // Save all images to the storage
      let urls:any='';
      if(image && image.uri && image.uri.changed ){
      let uploadTasks =async () => { 
          let uri = image.uri;
          if(uri) {
              const response = await fetch(uri);
              const blobFile = await response.blob();
              return await uploadFile(blobFile);
          }
          
       }
      
       urls= await uploadTasks();
      }
      console.log("image",image);
      let document = {
          type:"post",
          text: text,
          images:image.uri
      }
      console.log("working")
      await firestore().collection("postsAndEvents").doc(props.route.params.id).update(document);
      console.log("added")
      goto_home();
      
    
  
  } catch (e) {
      console.error(e);
      showToastWithGravity('somthing went wrong...');

  }
  }

return (
  <View style={styles.container}>
    <View style={styles.shareBtnView}>
      <Pressable
        onPress={savePost}
        style={styles.shareBtn}
      ><Text style={styles.btnText}>AddChanges</Text>

      </Pressable>
    </View>
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
    <AddPostAddImage setImage={setImage} uri={image} btnName="Add an Image" />



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
    fontSize: 16
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
  }, shareBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 10,
    backgroundColor: '#11ACBA',
    borderRadius: 20
  }, shareBtnView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }

});

export default EditPosts;