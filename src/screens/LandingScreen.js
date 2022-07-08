import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SocialAuthButton from '../components/atoms/social_auth_button';

function LandingScreen() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.wrapper}>
            <ImageBackground style={styles.background}>
                <View>
                    <Text style={styles.text}></Text>
                </View>
                <View style={styles.btnArea}>
                    <SocialAuthButton title="이메일로 시작하기"/>
                    <SocialAuthButton title="구글로 시작하기"/>
                    <View style={styles.textArea}>
                        <TouchableOpacity
                            onPress = {() => navigation.navigate('SignInScreen')}>
                            <Text style={{fontWeight:'bold'}}>로그인하기</Text>
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
        fontSize:50
    }
});

export default LandingScreen;
