import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {signOut} from '../lib/auth';
import {useUserContext} from '../contexts/UserContext';

function MyProfileScreen() {
    const {setUser} = useUserContext();
    
    //로그아웃 실행
    const onLogout = async () => {
        await signOut();
        setUser(null);
    }

    return (
        <View style={styles.wrapper}>
            <View style={{alignItems:'center', marginBottom:40}}>
                <TouchableOpacity style={styles.button} onPress={onLogout}>
                    <Text style={styles.text}>로그아웃</Text>
                </TouchableOpacity>
            </View>
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    submitBtn:{
        width:150,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'grey'
    },
    button:{
        width:250,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'grey'
    },
    text:{
        fontSize:30,
        textAlign:'center'
    },
});

export default MyProfileScreen;
