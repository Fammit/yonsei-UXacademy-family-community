import React from 'react';
import { Modal, TouchableOpacity, Pressable, StyleSheet, Text, View } from 'react-native';

function UploadModal({visible, onClose}) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}>
            <TouchableOpacity 
                style={styles.background}
                onPress={onClose}>
                <View style={styles.whiteBox}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>일상 올리기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>질문 올리기</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'rgba(0,0,0,0,6)',
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    whiteBox:{
        alignItems:'center',
        justifyContent:'center',
        width:230,
        height:170,
        borderRadius:10,
        elevation:2,
        backgroundColor:'grey'
    },
    button:{
        padding:15,
        paddingHorizontal:10,
        borderRadius:20,
        marginVertical:10,
        backgroundColor:'white'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }
});

export default UploadModal;
