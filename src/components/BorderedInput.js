import React from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';

function BorderedInput() {
    return (
        <View style={styles.wrapper}>
            <TextInput
                placeholder='textArea'
                style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginVertical:10,
        paddingHorizontal:35,
        width:'100%'
    },
    input:{
        paddingVertical:5,
        borderWidth:1,
        height:49,
        borderRadius:20,
        borderColor:'black'
    }
});

export default BorderedInput;
