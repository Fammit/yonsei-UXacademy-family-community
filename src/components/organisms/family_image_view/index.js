import React,{useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native'
import {Text} from 'react-native-paper';

import {useUserContext} from '../../../contexts/UserContext';

import NotificationButton from '../../atoms/notification_button';
import SettingButton from '../../atoms/setting_button';

function FamilyImageView() {
    const {user} = useUserContext();
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formatted = `${year}년 ${month}월 ${day}일`;

    return (
        <View style={styles.wrapper}>
            <View style={styles.textWrapper}>
                <Text>{user.info}</Text>
                <Text style={styles.titleText}>Text Area</Text>
                <Text style={styles.dateText}>{formatted}</Text>
            </View>
            <View style={styles.iconWrapper}>
                <NotificationButton/>
                <SettingButton/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        height:195
    },
    textWrapper:{
        position:"absolute",
        top:80,
        padding:5,
        marginLeft:20
    },
    iconWrapper:{
        flexDirection:"row",
        position:'absolute',
        right:10,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        fontFamily: 'NotoSansKR-Black'
    },
    dateText:{
        fontSize:16,
        fontWeight:'bold'
    }
});

export default FamilyImageView;