import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from '../components/User';
import AnswerForm from '../components/AnswerForm';
import Interaction from '../components/Interaction';
import Comment from '../components/Comment';

/* 
    사용자 정보
    답변
    질문
    인터렉션
    댓글
*/
function AnswerScreen() {
    return (
        <View style={styles.wrapper}>
            <User/>
            <AnswerForm/>
            <Interaction/>
            <Comment/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
});

export default AnswerScreen;
