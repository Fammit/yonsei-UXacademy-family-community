import React from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';

function BorderedInput({value, onChangeText}) {
    return <TextInput
                value={value}
                onChangeText={onChangeText}         
                placeholder='textArea'
                style={styles.input}/>
}

const styles = StyleSheet.create({
    input:{
        borderColor:'black',
        borderWidth:1,
        paddingHorizontal:16,
        height:48,
        borderRadius:25,
        backgroundColor:'white',
        marginBottom:16
    }
});

export default BorderedInput;
