import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyProfileScreen from '../screens/MyProfileScreen';

const Stack = createNativeStackNavigator();

function MyProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default MyProfileStack;
