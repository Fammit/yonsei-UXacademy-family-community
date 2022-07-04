import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BorderedInput from '../components/BorderedInput';
import SubmitButton from '../components/SubmitButton';
import SocialAuthButton from '../components/SocialAuthButton';

function SignInScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
            </View>
            <View style={styles.form}>
                <BorderedInput/>
                <BorderedInput/>
                <View style={styles.button}>
                    <SubmitButton/>
                </View>
            </View>
            <View style={styles.footer}>
                <SocialAuthButton text="구글로 시작하기"/>
                <View style={styles.textForm}>
                    <Text style={{textAlign:'center'}}>아직 계정이 없으세요?</Text>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('SignUpScreen')}>
                        <Text Text style={{fontWeight:'bold',textAlign:'center', textDecorationLine:'underline'}}>회원가입하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    header:{
        height:105,
    },
    form:{
        marginTop:50,
        width:'100%',
        paddingHorizontal:16,
    },
    footer:{
        marginTop:75,
    },
    button:{
        marginTop:34,
    },
    textForm:{
        marginTop:25
    }
});

export default SignInScreen;