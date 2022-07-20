import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function SystemMsgForm({message}) {
    return (
        <TouchableOpacity>
            <View style={styles.wrapper}>
                <Text>오늘의 추천 질문</Text>
                <Text style={styles.text}></Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        alignItems:'center',
        height:80,
        marginTop: 15,
        marginHorizontal:20,
        borderRadius:20,
        backgroundColor:'grey'
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
});

export default SystemMsgForm;
