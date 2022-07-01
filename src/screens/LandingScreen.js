import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthButton from '../components/AuthButton';

function LandingScreen() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.textArea}>
                <Text>LandingScreen</Text>
            </View>
            <View style={styles.btnArea}>
                <AuthButton/>
                <AuthButton/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
    textArea:{
        flex:1,
        alignItems:'center',
    },
    btnArea:{
        marginVertical:50,
    }
});

export default LandingScreen;
