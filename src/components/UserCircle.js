import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { profile } from '../data/dummy';

function UserCircle ({source}) {
    return (
        <View style={styles.circle}>
            <Image source={source} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        width:80,
        height:80,
        borderRadius:65,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        borderRadius:65,
        borderWidth:1,
        width:127,
        height:127
    }
})

export default UserCircle;
