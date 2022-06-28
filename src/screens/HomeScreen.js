import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FamilyImage from '../components/FamilyImage';
import UserProfileList from '../components/UserProfileList';
import SystemMsgForm from '../components/SystemMsgForm';
import { profile } from '../data/dummy';

function HomeScreen() {
    return (
        <View style={styles.wrapper}>
            {/*백그라운드 이미지*/}
            <View style={styles.imageWrapper}>
                <FamilyImage/>
            </View>
            {/*시스템 메시지*/}
            <View style={styles.systemMsgWrapper}>
                <SystemMsgForm/>
            </View>
            {/*사용자 목록*/}
            <View style={styles.userProfileWrapper}>
                <UserProfileList profile={profile}/>
            </View>
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
    imageWrapper:{
        height:195,
        backgroundColor:'white'
    },
    systemMsgWrapper:{
        alignItems:'center',
        height:80,
        marginTop: 15,
        marginHorizontal:20,
        borderRadius:20,
        backgroundColor:'grey'
    },
    userProfileWrapper:{
        flex:1,
        marginVertical:15,
        marginHorizontal:20,
    }
})

export default HomeScreen
