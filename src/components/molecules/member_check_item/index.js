import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LikeButton from '../../atoms/like_button';

function MemberCheckItem() {
    return (
        <View style={styles.wrapper}>
            <Text>읽은사람</Text>
            <LikeButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:60,
        marginHorizontal:20,
    },
});

export default MemberCheckItem;
