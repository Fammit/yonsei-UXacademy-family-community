import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';

function Interaction() {
    return (
        <View style={styles.wrapper}>
            <Text>TextArea</Text>
            <View style={styles.iconArea}>
                <LikeButton/>
                <SaveButton/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:30,
        marginHorizontal:30,
        height:70,
    },
    iconArea:{
        flexDirection:'row'
    }
})

export default Interaction;