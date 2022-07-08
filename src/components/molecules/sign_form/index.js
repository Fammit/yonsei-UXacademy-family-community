import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BorderedInput from '../../atoms/bordered_input';

function SignForm({form, createChangeTextHandler}) {
    return (
        <>
            <BorderedInput
                value={form.email}
                onChangeText={createChangeTextHandler('email')}/>
            <BorderedInput
                value={form.password}
                onChangeText={createChangeTextHandler('password')}/>
        </>
    )
}

const styles = StyleSheet.create({});

export default SignForm;