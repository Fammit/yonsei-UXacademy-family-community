import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {signOut} from '../lib/auth';
import {useUserContext} from '../contexts/UserContext';
import ListItem from '../data/ListItem';
import {getMember} from '../lib/users';
import {getFamily} from '../lib/family';

function MyProfileScreen() {
    const {setUser} = useUserContext();
    const {user} = useUserContext();

    const [member, setMember] = useState('');
    
    const onLogout = async () => {
        await signOut();
        setUser(null);
    }

    useEffect(() => {
        getMember().then(setMember);
        //console.log('FRONTEND =>', member);
    },[]);

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={onLogout}>
                <Text style={styles.text}>로그아웃</Text>
            </TouchableOpacity>
            {/*현재 로그인한 사용자의 info가 me이면 리스트 조회
            아니면 조회 불가*/}
            {user.info === 'me' ? (
                <FlatList 
                    style = {styles.container}
                    data ={member}
                    renderItem = {({item}) => (
                        <View>
                            {console.log(item.info)}
                            <ListItem text={item.info} />
                        </View>
                    )}
                />
            ) : ( null )}
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center'
    },
    button:{
        marginVertical:50,
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
