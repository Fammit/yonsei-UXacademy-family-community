import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/HomeStack';
import ChatStack from '../stacks/ChatStack';
import StorageStack from '../stacks/StorageStack';
import TemplateStack from '../stacks/TemplateStack';
import MyProfileStack from '../stacks/MyProfileStack';

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <View style={styles.wrapper}>
            <Tab.Navigator 
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'black'}}>
                <Tab.Screen
                    name="TemplateStack"
                    component={TemplateStack}/>
                <Tab.Screen
                    name="ChatStack"
                    component={ChatStack}/>
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}/>
                <Tab.Screen
                    name="StorageStack"
                    component={StorageStack}/>
                <Tab.Screen
                    name="MyProfileStack"
                    component={MyProfileStack}/>
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
});

export default MainTab;

