import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground } from 'react-native';
import SocialAuthButton from '../components/SocialAuthButton';
import {useNavigation} from '@react-navigation/native';

function LandingScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <ImageBackground style={{flex:1,}}>
                <View>
                    <Text style={{textAlign:"center", fontSize:50}}></Text>
                </View>
                <View style={styles.btnArea}>
                    <SocialAuthButton text="이메일로 시작하기"/>
                    <SocialAuthButton text="구글로 시작하기"/>
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
    btnArea:{
        width:'100%',
        marginTop:360,
        paddingVertical:10,
    },
    textArea:{
        marginTop:20,
        alignItems:'center'
    }
});

export default LandingScreen;
