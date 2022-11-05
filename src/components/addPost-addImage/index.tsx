import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddPostAddImage:React.FC<{btnName:string}> =(props)=> {
 

 

  const handleChoosePhoto = () => {

  }
  return (
    <View>
      {/* <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: imageUri,
          }}
        />
      </View> */}

      <View style={styles.addImageBtnContainer}>
        <Pressable
          onPress={handleChoosePhoto}
          style={styles.addImageBtn}
        ><Icon name="image" size={20} color="#fff" /><Text style={[styles.btnText, styles.addImageBtnTxt]}>
            {props.btnName}
          </Text>

        </Pressable>
        

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
  }
});

export default AddPostAddImage;
