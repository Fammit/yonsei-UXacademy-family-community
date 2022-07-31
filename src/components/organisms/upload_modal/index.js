import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View,  Modal } from 'react-native'
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function UploadModal({visible, onClose}) {
    const navigation = useNavigation();

    return (
        <Modal
            visible={visible}
            transparent={true}
            coverScreen={false}
            animationType="fade"
            onRequestClose={onClose}>
                <TouchableOpacity style={styles.background} onPress={onClose}>
                    <View style={styles.whitebox}>
                        <TouchableOpacity
                            style={styles.actionButtonDaily}
                            onPress={()=> {navigation.navigate('UploadDailyScreen')}}
                            android_ripple={{color:'#eee'}}>
                                <Text style={styles.text}>일상 올리기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.actionButtonQuestion}
                            onPress={()=> {navigation.navigate('UploadQuestionScreen')}}
                            android_ripple={{color:'#eee'}}>
                                <Text style={styles.text}>질문 올리기</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgba(0,0,0,0.6)',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    whitebox:{
        width:290,
        height:200,
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:15,
        elevation:2
    },
    actionButtonDaily:{
        padding:5,
        paddingHorizontal:80,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        marginVertical:5,
        borderRadius:15,
        backgroundColor:'#FFC149'
    },
    actionButtonQuestion:{
        padding:5,
        paddingHorizontal:80,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5,
        borderRadius:15,
        backgroundColor:'gray'
    },
    text:{
        textAlign:'center',
        fontSize:16,
        fontFamily:'NotoSansKR-Bold'
    }
})
export default UploadModal;
