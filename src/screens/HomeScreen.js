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
            <FamilyImage/>
            {/*시스템 메시지*/}
            <SystemMsgForm/>
            {/*사용자 목록*/}
            <UserProfileList profile={profile}/>
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
});

export default HomeScreen;
