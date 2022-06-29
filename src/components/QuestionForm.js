import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function QuestionForm() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>TextArea</Text>
        </View>
    )
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
        fontSize:30
    }
})

export default QuestionForm;