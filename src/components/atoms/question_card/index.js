import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity 
} from 'react-native';
import {Text} from 'react-native-paper';

function QuestionCard() {
    return (
        <View>
            <TouchableOpacity style={[styles.card, styles.shadow]}>
                <Text>card</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection:'row',
        margin:5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius:5,
        backgroundColor:'white'
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:2,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.84,
        elevation:3,
    }
});

export default QuestionCard;
