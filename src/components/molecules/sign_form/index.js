import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-paper';
import BorderedInput from '../../atoms/bordered_input';

function SignForm({form, createChangeTextHandler}) {
    return (
        <>  
            <View>
                <Text style={{fontFamily:'NotoSansKR-Bold'}}>이메일</Text>
                <BorderedInput
                    value={form.email}
                    onChangeText={createChangeTextHandler('email')}
                />
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontFamily:'NotoSansKR-Bold'}}>비밀번호</Text>
                <BorderedInput
                    value={form.password}
                    onChangeText={createChangeTextHandler('password')}
                    secureTextEntry/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({});

export default SignForm;