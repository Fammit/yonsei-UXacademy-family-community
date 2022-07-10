import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getQuestion } from '../../../lib/family';

function QuestionForm({question}) {
    //console.log('test', question);
    
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>{question}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        alignItems:'center',
        height:70,
        marginVertical:13,
        marginHorizontal:13,
        borderRadius:20,
        backgroundColor:"#d3d3d3"
    },
    text:{
        fontSize:32,
        fontWeight:'bold'
    }
})

export default QuestionForm;