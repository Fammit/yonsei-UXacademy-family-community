import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function QuestionForm() {
    return (
        <View style={styles.wrapper}>
            <Text>질문</Text>
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
})

export default QuestionForm;