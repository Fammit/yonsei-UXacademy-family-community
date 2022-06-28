import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FamilyImage from '../components/FamilyImage';
import { profile } from '../data/dummy';

function HomeScreen() {
    return (
        <View style={styles.wrapper}>
            {/*백그라운드 이미지*/}
            <View style={styles.imageWrapper}>
            </View>
            {/*시스템 메시지*/}
            <View style={styles.systemMsgWrapper}>

            </View>
            {/*사용자 목록*/}
            <View style={styles.userProfileWrapper}>
            </View>
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'grey'
    },
    imageWrapper:{
        height:195,
        backgroundColor:'green'
    },
    systemMsgWrapper:{
        height:103,
        marginTop: 15,
        marginHorizontal:20,
        borderRadius:20,
        backgroundColor:'blue'
    },
    userProfileWrapper:{
        flex:1,
        marginVertical:15,
        marginHorizontal:20,
        backgroundColor:'pink'
    }
})

export default HomeScreen
