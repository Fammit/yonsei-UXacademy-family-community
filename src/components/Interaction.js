import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Interaction() {
    return (
        <View style={styles.wrapper}>
            <Text>Interaction</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:70,
        backgroundColor:"green"
        
    }
})

export default Interaction;