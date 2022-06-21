import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function UserCircle () {
    return (
        <View style={styles.circle}>
            <Text>UserCircle</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        width:127,
        height:127,
        borderRadius:65,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'yellow',
    }
})

export default UserCircle;
