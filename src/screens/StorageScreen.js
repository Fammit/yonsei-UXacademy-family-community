import React, {useState} from 'react';
import { StyleSheet, Text, View, Image ,TextInput, TouchableOpacity, Platform } from 'react-native';
import storage from '@react-native-firebase/storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {useUserContext} from '../contexts/UserContext';
import {createUser} from '../lib/users';

function StorageScreen() {
    const [response, setResponse] = useState(null);
    const {setUser} = useUserContext();
    const {user} = useUserContext();

    const onSubmit = async () => {
        let photoURL = null;
        if(response) {
            const asset = response.assets[0];
            const extension = asset.fileName.split('.').pop();

            const reference = storage().ref(`/profile/${'Omyzu8IzqMaEZDk7fJuc1LcZY2B3'}.${extension}`);

            if(Platform.OS === 'android') {
                await reference.putString(asset.base64, 'base64', {
                    contentType:asset.type,
                });
            } else{
                await reference.putFile(asset.uri);
            }
            photoURL = response ? await reference.getDownloadURL() : null;
        }
        const user = {
            id: 'Omyzu8IzqMaEZDk7fJuc1LcZY2B3',
            info: '아빠',
            photoURL,
        }   
        createUser(user);
        setUser(user);
    }

    const onSelectImage = () => {
        launchImageLibrary(
            {
                mediaType:'photo',
                maxWidth:512,
                maxHeight:512,
                includeBase64: Platform.OS === 'android',
            },
            (res) => {
                if(res.didCancel){
                    return;
                }
                setResponse(res);
            }
        )
    }

    return (
        <View>
            {/* <TouchableOpacity onPress={onSelectImage}>
                <Image
                    style={styles.circle}
                    source={{uri:response?.assets[0].uri}}
                />
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={onSubmit}>
                    <Text>올리기</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={{width:128,height:128}} source={{uri: user.photoURL}}/>
            </View> */}
        </View>
    );   
};

const styles = StyleSheet.create({
    circle:{
        backgroundColor:"#cdcdcd",
        borderRadius:64,
        width:128,
        height:128,
    }
});

export default StorageScreen;
