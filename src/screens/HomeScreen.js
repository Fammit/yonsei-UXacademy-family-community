import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FamilyImage from '../components/FamilyImage';
import UserForm from '../components/UserForm';
import { profile } from '../data/dummy';

function HomeScreen() {
    return (
        <ScrollView showsVerticalScrollIndicator style={styles.wrapper}>
            {/*백그라운드 이미지*/}
            <View style={{height:205,backgroundColor:'red'}}>
                <FamilyImage/>
            </View>
            {/*사용자 목록*/}
            <View style={styles.userForm}>
                <UserForm profile={profile}/>
            </View>
        </ScrollView>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'grey'
    },
    userForm:{
        width:150,
        height:180,
        marginTop:15,
        marginLeft:37,
        padding:30,
        alignItems:'center',
        backgroundColor:'pink'
    }
})

export default HomeScreen
