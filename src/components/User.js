import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function User() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.userCircle}>
                <Image/>
            </View>
            <Text style={styles.text}>TextArea</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        alignItems:'center',
        height:90,
    },
    userCircle:{
        width:60,
        height:60,
        borderRadius:33,
        margin:15,
        backgroundColor:'grey'
    },
    text:{
        fontSize:35,
        fontWeight:'bold'
    }
})

export default User;