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
import AnswerCardHorizontalList from '../answer_card_horizontal_list';

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
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}>
                    <Text>{formatted}</Text>
                    <Text>
                        <Text style={styles.titleText}>오늘</Text>
                        <Text style={[styles.titleText, {color:'#F2AC43'}]}>우리 가족의</Text>
                    </Text>
                    <Text>
                        <Text style={[styles.titleText, {color:'#F2AC43'} ]}>일상</Text>
                        <Text style={styles.titleText}>을 확인해보세요🏡</Text>
                    </Text>
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
                <AnswerCardHorizontalList/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    statusBarPlaceholder:{
        backgroundColor:'white'
    },
    wrapper:{
        height:400,
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