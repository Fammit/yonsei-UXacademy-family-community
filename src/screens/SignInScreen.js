import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BorderedInput from '../components/BorderedInput';
import SubmitButton from '../components/SubmitButton';

function SignInScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <Text>AuthScreen</Text>
            <View style={styles.form}>
                <BorderedInput/>
                <BorderedInput/>
                <View style={styles.button}>
                    <SubmitButton/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'green'
    },
    form:{
        marginTop:50,
        width:'100%',
        paddingHorizontal:16,
        backgroundColor:'blue'
    },
    button:{
        marginTop:64,
        backgroundColor:'red'
    }
});
export default SignInScreen;