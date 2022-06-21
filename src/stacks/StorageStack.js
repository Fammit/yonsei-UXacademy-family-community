import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StorageScreen from '../screens/StorageScreen';

const Stack = createNativeStackNavigator();

function StorageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StorageScreen" component={StorageScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StorageStack;
