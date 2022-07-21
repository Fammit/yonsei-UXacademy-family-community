import React from 'react';
import { 
    StyleSheet, 
    TouchableOpacity, 
    View 
} from 'react-native';
import {Text} from 'react-native-paper';

function SystemMsgForm({message}) {
    return (
        <View>
            <Text style={{marginHorizontal:23,fontFamily:'NotoSansKR-Bold'}}>오늘의 추천 질문</Text>
            <TouchableOpacity style={styles.wrapper}>
                <Text style={styles.text}></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        alignItems:'center',
        height:80,
        marginTop: 15,
        marginHorizontal:23,
        borderRadius:20,
        backgroundColor:'#D9D9D9'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'NotoSansKR-Bold'
    }
});

export default SystemMsgForm;
