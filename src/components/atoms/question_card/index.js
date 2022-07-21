import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity 
} from 'react-native';
import {Text} from 'react-native-paper';

import MemberProfile from '../member_profile';

function QuestionCard({info, questionId, question}) {
    return (
        <View style={[styles.card, styles.shadow]}>
            <MemberProfile info={info}/>
            <Text style={styles.text}>{question}</Text>
            <TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        paddingVertical: 45,
        paddingHorizontal: 15,
        borderRadius:20,
        backgroundColor:'white'
    },
    text:{
        fontFamily:'NotoSansKR-Bold',
        fontSize:17,
        marginBottom:1,
        position:'absolute',
        left:10,
        bottom:1,
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowOpacity: 0.89,
        shadowRadius:3.84,
        elevation:5,
    }
});

export default QuestionCard;
