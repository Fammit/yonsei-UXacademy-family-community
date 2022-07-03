import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import BorderedInput from '../components/BorderedInput';
import {useNavigation} from '@react-navigation/native';

function SignInScreen() {
    const navigation = useNavigation();

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
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('MainTab')}>
                    <Text>Signin</Text>
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
        backgroundColor:'pink'
    },
    authForm:{
        width:'100%',
        paddingHorizontal:16,
        marginTop:50,
        backgroundColor:'blue'
    },
    btnForm:{
        marginVertical:15,
        backgroundColor:'red'
    }
});
export default SignInScreen;