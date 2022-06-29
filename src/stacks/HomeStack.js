import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AnswerScreen from '../screens/AnswerScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="AnswerScreen" component={AnswerScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default HomeStack;
