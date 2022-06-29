import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function User() {
    return (
        <View style={styles.wrapper}>
            <Text>User</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:90,
        backgroundColor:"red"
    }
})

export default User;