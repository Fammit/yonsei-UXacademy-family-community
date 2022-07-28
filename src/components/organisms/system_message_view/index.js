import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-paper';

function SystemMessageView() {
    return (
        <View style={styles.wrapper}>
            <Text style={{fontFamily:"NotoSansKR-Bold",fontSize:16}}>오늘 가족에게 이런 질문은 어때요?</Text>
            <Text style={{color:'gray'}}>클릭해서 질문칸에 복사해보세요.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        marginTop:10,
        marginLeft:20,
    }
});

export default SystemMessageView;
