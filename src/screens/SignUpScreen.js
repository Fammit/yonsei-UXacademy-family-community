import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Keyboard,
  Alert
} from 'react-native';
import BorderedInput from '../components/atoms/bordered_input';
import AuthSubmitButton from '../components/atoms/auth_submit_button';
import {signUp} from '../lib/auth';

function SignUpScreen() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const isSignUp = true;

  //form 객체에서 원하는 키 업데이트
  const createChangeTextHandler = (name) => (value) => {
    setForm({...form, [name]: value});
  }

  //회원가입 실행
  const onRegisterSubmit = async () => {
    Keyboard.dismiss();
    const {email, password} = form;
    const info = {email, password};
    try{
      const {user} = await signUp(info);
      console.log(user);
    } catch(e){
      Alert.alert('회원가입 실패');
      console.log(e);
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <BorderedInput 
          value={form.email}
          onChangeText={createChangeTextHandler('email')}/>
        <BorderedInput 
          value={form.password}
          onChangeText={createChangeTextHandler('password')}/>
        <BorderedInput 
          value={form.confirmPassword}
          onChangeText={createChangeTextHandler('confirmPassword')}/>
        <View style={styles.button}>
          <AuthSubmitButton 
            title="회원가입" 
            onRegisterSubmit={onRegisterSubmit}
            isSignUp={isSignUp}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  form:{
    width:'100%',
    marginTop:100,
    paddingHorizontal:16
  },
  button:{
    marginTop:34
  }
});

export default SignUpScreen;