import React, {useContext, createContext, useState} from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/';

const UserContext = createContext(null);

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    
    return(
        <UserContext.Provider
            children={children}
            value={{
                user,
                setUser,
            }}
        />
    );
}

export function useUserContext(){
    const userContext = useContext(UserContext);
    
    if(!userContext){
        throw new Error('UserContext.Provider is not found');
    }
    
    return userContext;
}