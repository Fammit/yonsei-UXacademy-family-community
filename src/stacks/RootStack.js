import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainTab from '../screens/MainTab';
import LandingScreen from '../screens/LandingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UploadQuestionScreen from '../screens/UploadQuestionScreen';
import UploadAnswerScreen from '../screens/UploadAnswerScreen';
import UploadDailyScreen from '../screens/UploadDailyScreen';
import NotificationScreen from '../screens/NotificationScreen';
import FeedScreen from '../screens/FeedScreen';

import { useUserContext } from '../contexts/UserContext';
import {getUser} from '../lib/users';
import { subscribeAuth } from '../lib/auth';

const Stack = createNativeStackNavigator();

function RootStack (){
    const {user, setUser} = useUserContext();

    //로그인 상태 유지
    useEffect(() => {
        const unsubscribe = subscribeAuth(async currentUser => {
            unsubscribe();
            if(!currentUser){
                return;
            }
            const profile = await getUser(currentUser.uid);
            if(!profile){
                return;
            }
            setUser(profile);
        });
    }, [setUser]);

    return (
        <Stack.Navigator initialRouteName='LandingScreen'>
            {user ? (
                <>
                    <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
                    <Stack.Screen name="UploadQuestionScreen" component={UploadQuestionScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="UploadDailyScreen" component={UploadDailyScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
                    <Stack.Screen name="UploadAnswerScreen" component={UploadAnswerScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="FeedScreen" component={FeedScreen} options={{headerShown:false}}/>

                </>
            ) : (
                <>
                    <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
                </>
            )}
        </Stack.Navigator>
    );
}

export default RootStack;
