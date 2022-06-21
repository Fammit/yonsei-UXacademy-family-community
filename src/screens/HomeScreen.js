import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FamilyImage from '../components/FamilyImage';
import UserForm from '../components/UserForm';

function HomeScreen() {
    return (
        <View style={styles.wrapper}>
            <View>
                <FamilyImage/>
            </View>
            <View>
                <UserForm/>
            </View>
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'grey',
        
    }
})

export default HomeScreen
