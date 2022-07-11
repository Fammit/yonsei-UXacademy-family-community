import React from 'react';
import { TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SocialAuthButton from '../components/atoms/social_auth_button';
import {Text} from 'react-native-paper'

function LandingScreen() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.wrapper}>
            <ImageBackground style={styles.background}>
                <View >
                    <Text style={styles.text}></Text>
                </View>
                <View style={styles.btnArea}>
                    <SocialAuthButton title="이메일로 시작하기" type='mail'/>
                    <SocialAuthButton title="구글로 시작하기" type='google'/>
                    <View style={styles.textArea}>
                        <Text style={styles.text}>이미 계정이 있으신가요?</Text>
                        <TouchableOpacity
                            onPress = {() => navigation.navigate('SignInScreen')}>
                            <Text style={{fontFamily:'NotoSansKR-Bold', textDecorationLine:'underline'}}>로그인하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    background:{
        flex:1
    },  
    btnArea:{
        width:'100%',
        marginTop:360,
        paddingVertical:10,
    },
    textArea:{
        marginTop:20,
        alignItems:'center'
    },
    text:{
        textAlign:"center",
        letterSpacing:2,
        fontSize:15
    }
});

export default LandingScreen;
