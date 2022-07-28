import React, {useEffect} from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import {Text} from 'react-native-paper';

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
import UploadScreen from '../screens/UploadScreen';

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
                    <Stack.Screen 
                        name="UploadQuestionScreen" 
                        component={UploadQuestionScreen} 
                        options={{
                            headerTransparent:true,
                            headerBackVisible:false,
                            headerTitleAlign:'center',
                            headerLeft: ({onPress}) => (
                                <TouchableOpacity>
                                    <Image
                                        source={(require('../assets/icons/icon-back.png'))}
                                        style={{width:30}}
                                    />
                                </TouchableOpacity>
                            ),
                            headerTitle:() => (
                                <View>
                                    <Text style={{
                                        fontSize:20,
                                        fontFamily:'NotoSansKR-Bold'
                                    }}>질문 올리기</Text>
                                </View>
                            )
            
                        }}
                    />
                    <Stack.Screen name="UploadDailyScreen" component={UploadDailyScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="UploadScreen" component={UploadScreen} options={{title:'새 게시물', headerBackTitle:'뒤로가기'}}/>
                    <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
                    <Stack.Screen name="UploadAnswerScreen" component={UploadAnswerScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="FeedScreen" component={FeedScreen} options={{headerShown:false}}/>

                </>
            ) : (
                <>
                    <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown:false}}/>
                    <Stack.Screen 
                        name="SignInScreen" 
                        component={SignInScreen} 
                        options={{
                            headerTransparent:true,
                            headerBackVisible:false,
                            headerTitleAlign:'center',
                            headerLeft: ({onPress}) => (
                                <TouchableOpacity>
                                    <Text style={{
                                        fontSize:17,
                                        fontFamily:'NotoSansKR-Bold'
                                    }}>취소</Text>
                                </TouchableOpacity>
                            ),
                            headerTitle:() => (
                                <View>
                                    <Text style={{
                                        fontSize:23,
                                        fontFamily:'NotoSansKR-Bold'
                                    }}>로그인</Text>
                                </View>
                            ),
                            headerRight: ({onPress}) => (
                                <TouchableOpacity>
                                    <Text style={{
                                        fontSize:17,
                                        fontFamily:'NotoSansKR-Bold'
                                    }}>다음</Text>
                                </TouchableOpacity>
                            ),
                        }}
                    />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
                    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
                </>
            )}
        </Stack.Navigator>
    );
}

export default RootStack;
