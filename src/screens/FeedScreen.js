import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FeedAnsweredView from '../components/organisms/feed_answered_view';
import FeedContentsView from '../components/organisms/feed_contents_view';
import {getQuestion} from '../lib/family';

/* 
    사용자 정보
    답변
    질문
    인터렉션
    댓글
*/
function FeedScreen() {
    const [question, setQuestion] = useState('');

    //call API
    useEffect(() => {
        getQuestion().then(setQuestion);
    },[]);
    
    return (
        <ScrollView style={styles.wrapper}>
            <FeedAnsweredView question={question}/>
            <FeedContentsView/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
});

export default FeedScreen;
