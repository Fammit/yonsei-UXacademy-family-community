import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BorderedInput from '../components/BorderedInput';
import SubmitButton from '../components/SubmitButton';

function SignUpScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <BorderedInput/>
        <BorderedInput/>
        <BorderedInput/>
        <View style={styles.button}>
          <SubmitButton text="회원가입"/>
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