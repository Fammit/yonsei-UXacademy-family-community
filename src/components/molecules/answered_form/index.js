import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuestionForm from '../../atoms/question_form';

function AnsweredForm({question}) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.block}>
                <QuestionForm question={question}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
    },
    block:{
        width:370,
        height:370,
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'grey'
    }
})

export default AnsweredForm;