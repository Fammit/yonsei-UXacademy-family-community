import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from '../screens/MainTab';
import UploadQuestionsScreen from '../screens/UploadQuestionsScreen';

const Stack = createNativeStackNavigator();

function RootStack (){
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
            <Stack.Screen name="UploadQuestionsScreen" component={UploadQuestionsScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default RootStack;
