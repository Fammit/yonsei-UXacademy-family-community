
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function AuthSubmitButton({title, onRegisterSubmit, onSignInSubmit, isSignUp}) {
    const navigation = useNavigation();

    return (
            <TouchableOpacity
                style={styles.wrapper}
                onPress={isSignUp ? onRegisterSubmit : onSignInSubmit}
                >
                <Text>{title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        alignItems:'center',
        justifyContent:'center',
        height:48,
        borderWidth:1,
        borderRadius:25,
        backgroundColor:'grey'
    }
});

export default AuthSubmitButton;
