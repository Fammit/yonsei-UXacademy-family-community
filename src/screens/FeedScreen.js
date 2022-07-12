import React, {useEffect, useState} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import FeedAnsweredView from '../components/organisms/feed_answered_view';
import FeedContentsView from '../components/organisms/feed_contents_view';
import {getQuestion} from '../lib/family';
import {getPosts} from '../lib/posts';

/* 
    사용자 정보
    답변
    질문
    인터렉션
    댓글
*/
function FeedScreen() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    
    return (
        <FlatList
            data={posts}
            renderItem={renderItem}
            />
    )
}

const renderItem = ({item}) => {
    return(
        <FeedAnsweredView
            photoURL={item.photoURL}/>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
});

export default FeedScreen;
