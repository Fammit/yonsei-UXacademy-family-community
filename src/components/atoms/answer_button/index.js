import React from 'react';
import { 
    StyleSheet, 
    View,
    TouchableOpacity
} from 'react-native';
import {Text} from 'react-native-paper';

function AnswerButton({onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{fontFamily:'NotoSansKR-Bold'}}>답하기</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        position:'absolute',
        right:20,
        bottom:10,
        borderRadius:30,
        paddingHorizontal: 15,
        paddingVertical: 5,

        backgroundColor:'gray'
    }
})

export default AnswerButton;