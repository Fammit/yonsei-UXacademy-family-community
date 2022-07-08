import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UploadModal from './UploadModal';
import {Button} from 'react-native-paper';

function UploadButton({openMenu}) {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.button}
                onPress={openMenu}>
                <Icon name="plus-square-o" size={36}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
    },
    button:{
        width:36,
        height:56,
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default UploadButton
