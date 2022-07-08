import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {signOut} from '../lib/auth';
import {useUserContext} from '../contexts/UserContext';
import ListItem from '../data/ListItem';
import {getMember} from '../lib/users';
import {getFamily} from '../lib/family';
import {CheckBox} from 'react-native-elements';

function MyProfileScreen() {
    const {setUser} = useUserContext();
    const {user} = useUserContext();

    const [member, setMember] = useState('');
    const [checked, setChecked] = useState(false);
    
    //로그아웃 실행
    const onLogout = async () => {
        await signOut();
        setUser(null);
    }

    const onSubmit = async () => {

    }
    //사용자 정보 API 호출_Read
    useEffect(() => {
        getMember().then(setMember);
        //console.log('FRONTEND =>', member);
    },[]);
    console.log('result', member);
    return (
        <View style={styles.wrapper}>
            <View style={{marginVertical:20, alignItems:'center'}}>
                <Text style={{fontSize:40}}>사용자 추가</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <CheckBox title='df' checked={checked} onPress={()=>setChecked(!checked)}/>
            </View>
            {/*현재 로그인한 사용자의 info가 me이면 리스트 조회
            아니면 조회 불가*/}
            {user.info === 'me' ? (
                <>
                    <FlatList 
                        ItemSeparatorComponent={() => <View style={styles.separator}/>}
                        style = {styles.container}
                        data ={member}
                        renderItem = {({item}) => (
                            <View>
                                {console.log('DEBUG',item.info)}
                                <ListItem text={item.info} />
                            </View>
                        )}
                    />
                    <View style={{alignItems:'center', marginBottom:140}}>
                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={styles.text}>추가</Text>
                        </TouchableOpacity>
                    </View>
                </>
            ) : ( null )}
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
    separator:{
        backgroundColor:'black',
        height:1
    }
});

export default MyProfileScreen;
