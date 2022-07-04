import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function InputQuestion() {
  return <TextInput
            style={styles.input}/>
}
const styles = StyleSheet.create({
    input:{
        marginHorizontal:20,
        marginTop:10,
        height:165,
        borderRadius:25,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'grey'
    }
})

export default InputQuestion;
