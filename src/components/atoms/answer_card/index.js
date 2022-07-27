import React from 'react';
import { 
    StyleSheet, 
    Text,
    TouchableOpacity, 
    View 
} from 'react-native';

function AnswerCard() {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <Text>index</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:170,
        height:220,
        marginHorizontal:10,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'grey'
    }
});

export default AnswerCard;
