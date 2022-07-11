import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BorderedInput from '../../atoms/bordered_input';

function SignForm({form, createChangeTextHandler}) {
    return (
        <>
            <BorderedInput
                placeholder="이메일"
                value={form.email}
                onChangeText={createChangeTextHandler('email')}/>
            <BorderedInput
                placeholder="비밀번호"
                value={form.password}
                onChangeText={createChangeTextHandler('password')}
                secureTextEntry/>
        </>
    )
}

const styles = StyleSheet.create({});

export default SignForm;