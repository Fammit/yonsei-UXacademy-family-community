import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';

function AuthSubmitButton({title, onRegisterSubmit, onSignInSubmit, isSignUp, loading}) {
    const navigation = useNavigation();

    if(loading) {
        return (
            <View style={styles.spinnerWrapper}>
                <ActivityIndicator
                    animating={true}
                    size='large'
                />
            </View>
        )
    }
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
        borderRadius:20,
        backgroundColor:'grey'
    },
    spinnerWrapper:{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        //marginTop:64,
        height:104,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default AuthSubmitButton;
