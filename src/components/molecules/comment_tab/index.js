import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommentInputText from '../../atoms/comment_input_text';

function CommentTab() {
    return (
        <View style={styles.wrapper}>
            <Text>댓글 value</Text>
            <CommentInputText/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginHorizontal:20,
    }
});

export default CommentTab;
