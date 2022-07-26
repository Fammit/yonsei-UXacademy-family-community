import React,{useEffect, useState} from 'react';
import { 
    StyleSheet, 
    View, 
    Image,
    StatusBar, 
} from 'react-native'
import {Text} from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {useUserContext} from '../../../contexts/UserContext';

import NotificationButton from '../../atoms/notification_button';
import SettingButton from '../../atoms/setting_button';

function FamilyImageView() {
    const {user} = useUserContext();
    
    //statusbar 높이 계산
    const {top} = useSafeAreaInsets();

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formatted = `${year}년 ${month}월 ${day}일`;

    return (
        <>
            <View style={[styles.statusBarPlaceholder, {height: top}]}/>
            <StatusBar backgroundColor='#FCCD72'/>
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}>
                    <Text>{formatted}</Text>
                    <Text style={styles.titleText}>오늘 우리가족의{"\n"}일상을 확인해보세요</Text>
                </View>
                <View style={styles.image}>
                    <Image
                        source={require('../../../assets/images/logo.png')}
                    />
                </View>
                <View style={styles.iconWrapper}>
                    <SettingButton/>
                    <NotificationButton/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    statusBarPlaceholder:{
        backgroundColor:'#FCCD72'
    },
    wrapper:{
        height:350,
        backgroundColor:'#FCCD72',
        borderBottomLeftRadius:180,
        borderBottomRightRadius:180,
    },
    textWrapper:{
        position:"absolute",
        top:50,
        padding:5,
        marginLeft:15,
    },
    iconWrapper:{
        flexDirection:"row",
        position:'absolute',
        right:10,
    },
    titleText:{
        fontSize:23,
        fontWeight:'bold',
        fontFamily: 'NotoSansKR-Black'
    },
    dateText:{
        fontSize:16,
        fontWeight:'bold'
    },
    image:{
        marginLeft:20,
        marginTop:20
    }
});

export default FamilyImageView;