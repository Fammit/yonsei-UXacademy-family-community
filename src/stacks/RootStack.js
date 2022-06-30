import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from '../screens/MainTab';
import LandingScreen from '../screens/LandingScreen';

const Stack = createNativeStackNavigator();

function RootStack (){
    return (
        <Stack.Navigator initialRouteName='LandingScreen'>
            <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown:false}}/>
            <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default RootStack;
