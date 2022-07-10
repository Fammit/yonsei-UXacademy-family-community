import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UploadButton from '../components/UploadButton';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Fontisto';

function ChatScreen() {
    
    return (
        <View>
            
        </View>
    );   
};

const styles = StyleSheet.create({
    button:{
        width:56,
        height:56,
        backgroundColor:'grey',
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ChatScreen;
