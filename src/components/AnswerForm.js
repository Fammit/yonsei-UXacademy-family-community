import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuestionForm from './QuestionForm';

function AnswerForm() {
    return (
        <View style={styles.wrapper}>
            <QuestionForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        marginHorizontal:16,
        marginVertical:16,
        borderRadius:20,
        backgroundColor:"blue"
        
    }
})

export default AnswerForm;