import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';


const AddPostAddImage: React.FC<{ btnName: string, setImage: any,uri:any }> = (props) => {
  const [images, setImages] = useState<any>();
  useEffect(()=>{
    setImages({uri:props.uri.uri});
    console.log("in if", props.uri);
  },[props.uri])

  const handleChoosePhoto = async () => {
    let result = await launchImageLibrary({
      mediaType: "photo"
    });

    if (!result.didCancel) {

      if (result.assets) {
        console.log("here it is",result.assets[0])
        props.setImage({uri:result.assets[0].uri,changed:true})
        
      }
    }

  }
  const handleRemovePhoto = async () => {
    setImages(null)
    props.setImage({uri:'',changed:false});
  }
  return (
    <View>
      {images && images.uri &&
      (<View key={images.uri}>
        <Image
          style={styles.image}
          source={{ uri: images.uri }}
        />
      </View>)}





      <View style={styles.addImageBtnContainer}>
        {images && images.uri? <Pressable
          onPress={handleRemovePhoto}
          style={styles.addImageBtn}
        ><Icon name="image" size={20} color="#fff" /><Text style={[styles.btnText, styles.addImageBtnTxt]}>
            Remove Image
          </Text>

        </Pressable> :
          <Pressable
            onPress={handleChoosePhoto}
            style={styles.addImageBtn}
          ><Icon name="image" size={20} color="#fff" /><Text style={[styles.btnText, styles.addImageBtnTxt]}>
              {props.btnName}
            </Text>

          </Pressable>
        }


      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  addImageBtnContainer: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  addImageBtn: {
    borderRadius: 20,
    paddingTop: 8,
    paddingRight: 20,
    paddingBottom: 8,
    paddingLeft: 20,
    backgroundColor: '#16DAED',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addImageBtnTxt: {
    paddingLeft: 6
  }, image: {
    height: 300,
    width: '100%'
  }
});

export default AddPostAddImage;
