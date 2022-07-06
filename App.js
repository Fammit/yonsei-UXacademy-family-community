import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/stacks/RootStack';
import {UserContextProvider} from './src/contexts/UserContext';

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    </UserContextProvider>
  )
}

export default App;
