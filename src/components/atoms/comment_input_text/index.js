import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

function CommentInputText() {
    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:5,
    },
    input:{
        height:40,
        borderColor:'black',
        borderWidth:1,
        borderRadius:25,
        backgroundColor:'#d3d3d3'
    }
})

export default CommentInputText;