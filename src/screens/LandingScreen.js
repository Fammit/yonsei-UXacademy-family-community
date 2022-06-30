import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function LandingScreen() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.textArea}>
                <Text>LandingScreen</Text>
            </View>
            <View style={styles.btnArea}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'blue'
    },
    textArea:{
        flex:1,
        alignItems:'center',
        backgroundColor:'red'
    },
    btnArea:{
        backgroundColor:'green'
    }
});

export default LandingScreen;
