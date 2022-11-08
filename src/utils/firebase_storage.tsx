import uuid from 'react-native-uuid';
import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';
import { Asset } from 'react-native-image-picker';

export async function uploadFile(file: Blob) {
    let name = uuid.v4();
    let ref = storage().ref(`images/${name}`);
    await ref.put(file);
    return await ref.getDownloadURL();
}
