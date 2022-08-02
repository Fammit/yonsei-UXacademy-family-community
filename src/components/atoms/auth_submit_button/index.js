import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {Text} from 'react-native-paper';
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
                    color='#FCCD72'
                    style={{ position:'absolute', left:0, right:0, bottom:0, top:0 }}
                />
            </View>
        )
    }

    return (
        <>
            <TouchableOpacity
                style={styles.wrapper}
                onPress={isSignUp ? onRegisterSubmit : onSignInSubmit}
                >
                <Text style={{fontFamily:"NotoSansKR-Bold", fontSize:17}}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginRight:-3,
        overflow:'hidden'
        // alignItems:'center',
        // justifyContent:'center',
        // height:48,
        // borderRadius:20,
        // backgroundColor:'#FCCD72'
    },
    spinnerWrapper:{
        // flex:1,
        // position: 'absolute', 
        // top: 0, 
        // left: 0, 
        // right: 0, 
        // bottom: 0, 
        // //marginTop:94,
        // height:104,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // position: 'absolute', 
        // bottom: 10, 


    }
});

export default AuthSubmitButton;
