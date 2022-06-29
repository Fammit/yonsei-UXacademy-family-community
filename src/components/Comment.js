import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Comment() {
    return (
        <View style={styles.wrapper}>
            <Text>Comment</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:90,
        backgroundColor:"pink"
        
    }
})

export default Comment;