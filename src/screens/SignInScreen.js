import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import BorderedInput from '../components/BorderedInput';

function SignInScreen() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.textWrapper}>
                <Text>AuthScreen</Text>
            </View>
            <View style={styles.authForm}>
                <BorderedInput/>
                <BorderedInput/>
            </View>
            <View style={styles.btnForm}>  
                <TouchableOpacity>
                    <Text>SignIn</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'green'
    },
    textWrapper:{
        flex:1,
        backgroundColor:'pink'
    },
    authForm:{
        width:'100%',
        marginVertical:50
    },
    btnForm:{
        marginVertical:15,
        backgroundColor:'red'
    }
});
export default SignInScreen;