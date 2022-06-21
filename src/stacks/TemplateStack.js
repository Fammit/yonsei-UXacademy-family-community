import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TemplateScreen from '../screens/TemplateScreen';

const Stack = createNativeStackNavigator();

function TemplateStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TemplateScreen" component={TemplateScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
}

export default TemplateStack;
