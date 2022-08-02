import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {UserContextProvider} from './src/contexts/UserContext';

import RootStack from './src/stacks/RootStack';

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
