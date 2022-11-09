import React,{useState, useEffect} from "react";
import { ScrollView, Text,View } from "react-native";
import Post from "../../components/posts";
import firestore from '@react-native-firebase/firestore';
import Event from "../../components/event/Index";

export default function Posts(props) {
    const [snapshot,setSnapshot] = React.useState([])
    useEffect(()=>{

    // Stop listening for updates when no longer required

        const subscriber= firestore().collection('postsAndEvents').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>{
            let posts = []
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                if(doc.data().type==='post'){
                    posts.push(<Post key={doc.id} data={doc}/>)
                }else{
                    posts.push(<Event key={doc.id} data={doc}/>)
                }
              });
    
            setSnapshot(posts)
        })
        return () => subscriber();
    },[]);
    

    return (
        <View>
            {snapshot && snapshot}
    </View> 
   
    )
}