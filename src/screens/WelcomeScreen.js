import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {createUser} from '../lib/users';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useUserContext} from '../contexts/UserContext';

function WelcomeScreen() {
    const [info, setInfo] = useState('');
    const navigation = useNavigation();

    const {params} = useRoute();
    const {uid} = params || {};

    const {setUser} = useUserContext();

    const onSubmit = () => {
        const user = {
            id: uid,
            info
        };
        createUser(user);
        setUser(user);
    };
    
    return (
        <View style={styles.wrapper}>
            <Text>닉네임</Text>
            <TextInput
                value={info} 
                style={styles.input}
                onChangeText={setInfo}/>
            <TouchableOpacity onPress={onSubmit}>
                <Text>다음</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        height:48,
        borderRadius:25,
        backgroundColor:'grey'
    }
})

export default WelcomeScreen;