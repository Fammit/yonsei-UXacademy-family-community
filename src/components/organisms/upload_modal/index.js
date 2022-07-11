import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Modal } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import UploadButton from '../../UploadButton';

function UploadModal({visible, onClose}) {
    const navigation = useNavigation();
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}>
                <TouchableOpacity style={styles.background} onPress={onClose}>
                    <View style={styles.whitebox}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={()=> {navigation.navigate('UploadQuestionScreen')}}
                            android_ripple={{color:'#eee'}}>
                                <Text>질문 올리기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={()=> {navigation.navigate('UploadDailyScreen')}}
                            android_ripple={{color:'#eee'}}>
                                <Text>일상 올리기</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'grey',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    whitebox:{
        width:300,
        backgroundColor:'white',
        borderRadius:4,
        elevation:2
    },
    actionButton:{
        padding:16,
        flexDirection:'row',
        alignItems:'center'
    }
})
export default UploadModal;
