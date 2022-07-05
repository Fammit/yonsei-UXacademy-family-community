import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemberProfile from '../../atoms/member_profile';

function MemberHeader() {
    return (
        <View style={styles.wrapper}>
            <MemberProfile/>
            <Text style={styles.text}>Member Name</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        height:90,
        alignItems:'center',
    },
    text:{
        fontSize:35,
        fontWeight:'bold'
    }
});

export default MemberHeader;