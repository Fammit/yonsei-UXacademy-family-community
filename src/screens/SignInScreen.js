import React, {useState} from 'react';
import { 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    View,
    Keyboard, 
    Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignForm from '../components/molecules/sign_form';
import AuthSubmitButton from '../components/atoms/auth_submit_button';
import SocialAuthButton from '../components/atoms/social_auth_button';
import {signIn} from '../lib/auth';
import {getUser} from '../lib/users';
import {useUserContext} from '../contexts/UserContext';

function SignInScreen() {
    const navigation = useNavigation();
    const isSignUp = false;
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const {setUser} = useUserContext();
    
    //loading
    const [loading, setLoading] = useState();

    //form 객체에서 원하는 키 업데이트
    const createChangeTextHandler = (name) => (value) => {
        setForm({...form, [name]: value});
    }
    
    //EventHandler : 로그인 실행
    const onSignInSubmit = async () => {
        Keyboard.dismiss();
        const {email, password} = form;
        const info = {email, password};
        try{
            setLoading(true);
            const {user} = await signIn(info);
            const profile = await getUser(user.uid);
            setLoading(false);
            if(!profile){
                navigation.navigate('WelcomeScreen', {uid: user.uid})
            }else{
                setUser(profile);
            }
            //console.log("loginsuccess");
        } catch(e){
            const messages = {
                'auth/user-not-found':'존재하지 않는 계정입니다.',
                'auth/wrong-password':'잘못된 비밀번호입니다.',
                'auth/invaild-email':'유효하지 않은 이메일 주소입니다.'
            };
            const msg = messages[e.code];
            Alert.alert('로그인 실패', msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
            </View>
            <View style={styles.form}>
                <SignForm form={form} createChangeTextHandler={createChangeTextHandler}/>
                <View style={styles.button}>
                    <AuthSubmitButton 
                        title="로그인"
                        onSignInSubmit={onSignInSubmit}
                        isSignUp={isSignUp}
                        loading={loading}
                    />
                </View>
            </View>
            <View style={styles.footer}>
                <SocialAuthButton title="구글로 시작하기" type="google"/>
                <View style={styles.textForm}>
                    <Text style={{textAlign:'center'}}>아직 계정이 없으세요?</Text>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('SignUpScreen')}>
                        <Text style={styles.text}>회원가입하기</Text>
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
    },
    text:{
        fontWeight:'bold',
        textAlign:'center', 
        textDecorationLine:'underline'
    }
});

export default SignInScreen;