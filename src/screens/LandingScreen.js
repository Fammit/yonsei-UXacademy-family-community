import React from 'react';
import { TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SocialAuthButton from '../components/atoms/social_auth_button';
import {Text} from 'react-native-paper'

function LandingScreen() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.wrapper}>
            <View style={{marginTop:110, marginLeft:30}}>
                <View>
                    <Text style={styles.title}>서로에게</Text>
                    <Text style={styles.title}>말 건네기 쉬워지는</Text>
                    <Text style={styles.title}>우리 가족 전용 SNS,</Text>
                </View>
                <View style={{marginTop:40}}>
                    <Text>
                        <Text style={[styles.title, {color:'#F2AC43'}] }>Fammit</Text>
                        <Text style={styles.title}>에서</Text>
                    </Text>
                    <Text style={styles.title}>가족들과 만나보세요!</Text>
                </View>
            </View>
            <View style={styles.btnArea}>
                <SocialAuthButton title="이메일로 시작하기" type="mail"/>
                <SocialAuthButton title="구글로 시작하기" type='google'/>
            </View>
            <View style={styles.textArea}>
                <Text style={styles.text}>이미 계정이 있으신가요?</Text>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('SignInScreen')}>
                    <Text style={{fontFamily:'NotoSansKR-Bold', textDecorationLine:'underline'}}>로그인하기</Text>
                </TouchableOpacity>
            </View>
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
        marginTop:90,
        paddingVertical:5,
    },
    textArea:{
        marginTop:20,
        alignItems:'center'
    },
    title:{
        fontSize:26,
        fontFamily:'NotoSansKR-Bold',
        lineHeight:35
    },
    text:{
        textAlign:"center",
        fontSize:15
    }
});

export default LandingScreen;
