import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FamilyImage from '../components/FamilyImage';
import UserForm from '../components/UserForm';

function HomeScreen() {
    return (
        <View style={styles.wrapper}>
            {/*백그라운드 이미지*/}
            <View style={{height:242,backgroundColor:'red'}}>
                <FamilyImage/>
            </View>
            {/*사용자 목록*/}
            <View style={styles.userForm}>
                <UserForm/>
            </View>
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'grey'
    },
    userForm:{
        width:150,
        marginTop:15,
        marginLeft:37,
        padding:15,
        alignItems:'center',
        backgroundColor:'pink'
    }
})

export default HomeScreen
