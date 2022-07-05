import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Divider} from 'react-native-paper';
import MemberCheckItem from '../../molecules/member_check_item';
import CommentTab from '../../molecules/comment_tab';

//해당 컴포넌트 뷰 marginleft값으로 수정 필요
function FeedContentsView() {
    return (
        <View style={styles.wrapper}>
            <MemberCheckItem/>
            <Divider/>
            <CommentTab/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:300,
    }
});

export default FeedContentsView;