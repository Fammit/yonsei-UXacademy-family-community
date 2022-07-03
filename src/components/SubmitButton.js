import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SubmitButton() {
    const navigation = useNavigation();

    return (
            <TouchableOpacity
                style={styles.wrapper}
                onPress={() => navigation.navigate('MainTab')}>
                <Text>로그인</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        alignItems:'center',
        justifyContent:'center',
        height:48,
        borderWidth:1,
        borderRadius:25,
        backgroundColor:'grey'
    }
});

export default SubmitButton;
