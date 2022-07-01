import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

function AuthButton() {
    return (
        <TouchableOpacity
            style={styles.button}>
            <View style={styles.textWrapper}>
                <Text>AuthButton</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        margin:10,
        marginHorizontal:25,
        backgroundColor:'grey',
        borderRadius:20,
        paddingVertical:13
    },
    textWrapper:{
        marginLeft:95
    }
});
export default AuthButton;
