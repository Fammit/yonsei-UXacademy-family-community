import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function QuestionForm() {
    return (
        <View style={styles.wrapper}>
            <Text>QuestionForm</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:70,
        marginVertical:13,
        marginHorizontal:13,
        borderRadius:20,
        backgroundColor:"grey"
    }
})

export default QuestionForm;