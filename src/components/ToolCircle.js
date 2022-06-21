import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ToolCircle() {
    return (
        <View style={styles.circle}>
            <Text>ToolCircle</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        width:37,
        height:37,
        borderRadius:17,
        marginVertical:15,
        backgroundColor:'blue'
    }
});

export default ToolCircle;
