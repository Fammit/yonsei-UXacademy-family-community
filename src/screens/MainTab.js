import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';
import HomeStack from '../stacks/HomeStack';
import ChatStack from '../stacks/ChatStack';
import StorageStack from '../stacks/StorageStack';
import MyProfileStack from '../stacks/MyProfileStack';
import UploadButton from '../components/atoms/upload_button';

const Tab = createBottomTabNavigator();

function MainTab() {

    return (
        <View style={styles.wrapper}>
            <Tab.Navigator 
                initialRouteName='HomeStack'
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle:'',
                    tabBarActiveTintColor: '#FFC149'}}>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        title:'홈',
                        tabBarIcon: ({color}) => 
                            <Icon name="home-outline" size={24} color={color}/>
                    }} />
                <Tab.Screen
                    name="ChatStack"
                    component={ChatStack}
                    options={{
                        title:'채팅방',
                        tabBarIcon: ({color}) => 
                            <Icon name="chatbubble-outline" size={24} color={color}/>
                    }}/>
                <Tab.Screen
                    name="StorageStack"
                    component={StorageStack}
                    options={{
                        title:'보관함',
                        tabBarIcon: ({color}) => 
                            <Icon name="md-folder-outline" size={24} color={color}/>
                    }}/>
                <Tab.Screen
                    name="MyProfileStack"
                    component={MyProfileStack}
                    options={{
                        title:'마이페이지',
                        tabBarIcon: ({color}) => 
                            <Icon name="md-person-outline" size={24} color={color}/>
                    }}/>
            </Tab.Navigator>
            <UploadButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
});

export default MainTab;

