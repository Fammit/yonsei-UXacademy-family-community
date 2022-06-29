import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function SystemMsgForm() {
    return (
        <TouchableOpacity>
            <View style={styles.wrapper}>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        alignItems:'center',
        height:80,
        marginTop: 15,
        marginHorizontal:20,
        borderRadius:20,
        backgroundColor:'grey'
    }
});

export default SystemMsgForm;
