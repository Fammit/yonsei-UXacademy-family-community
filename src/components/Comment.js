import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

function Comment() {
    return (
        <View style={styles.wrapper}>
            <Text>Text Area</Text>
            <View>
                <TextInput style={styles.input}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:90,
        marginHorizontal:30,
        
    },
    input:{
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'#d3d3d3'
    }
})

export default Comment;