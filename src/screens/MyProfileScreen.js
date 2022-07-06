import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {signOut} from '../lib/auth';
import {useUserContext} from '../contexts/UserContext';

function MyProfileScreen() {
    const {setUser} = useUserContext();

    const onLogout = async () => {
        await signOut();
        setUser(null);
    }
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={onLogout}>
                <Text style={styles.text}>로그아웃</Text>
            </TouchableOpacity>
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center'
    },
    button:{
        marginVertical:150,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'grey'
    },
    text:{
        fontSize:30
    }
});

export default MyProfileScreen;
