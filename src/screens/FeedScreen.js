import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FeedAnsweredView from '../components/organisms/feed_answered_view';
import FeedContentsView from '../components/organisms/feed_contents_view';
/* 
    사용자 정보
    답변
    질문
    인터렉션
    댓글
*/
function FeedScreen() {
    return (
        <ScrollView style={styles.wrapper}>
            <FeedAnsweredView/>
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
