import React, {useEffect, useCallback, useState} from 'react';
import { 
    StyleSheet, 
    View, 
    useWindowDimensions, 
    Image,
    TextInput,
    ScrollView,
    Platform 
} from 'react-native';
import {Text} from 'react-native-paper';
import storage from '@react-native-firebase/storage';

import {useUserContext} from '../contexts/UserContext';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {v4} from 'uuid';

import { createAnswer } from '../lib/answer';

import QuestionBox from '../components/atoms/question_box';
import PostSubmitButton from '../components/atoms/post_submit_button';

function UploadAnswerScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const [description, setDiscription] = useState('');
    
    const {user} = useUserContext();
    const {res} = route.params || {};
    const {data} = route.params || {};
    const {isAnswered} = route.params || {};
    const {width} = useWindowDimensions();

    const questionId = data.questionId;

    //답변 생성 실행
    const onSubmit = useCallback(async () => {
        navigation.pop();
        const asset = res.assets[0];

        const extension = asset.fileName.split('.').pop();
        const reference = storage().ref(`/photo/${user.id}/${v4()}.${extension}`);
        if(Platform.OS === 'android') {
            await reference.putString(asset.base64, 'base64', {
                contentType: asset.type,
            });
        } else {
            await reference.putFile(asset.uri);
        }
        const photoURL = await reference.getDownloadURL();
        await createAnswer({questionId, isAnswered, user, photoURL, description});
    }, [res, user, description, navigation] );

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <PostSubmitButton onPress={onSubmit} name="send"/>
        });
    }, [navigation, onSubmit])

    return (
        <ScrollView style={styles.wrapper}>
            <QuestionBox data={data}/>
                <View style={{marginLeft:15}}>
                    <Text style={{fontFamily:"NotoSansKR-Bold", fontSize:16}}>선택한 사진</Text>
                </View>
                <View style={styles.block}>
                    <Image
                        source={{uri:res.assets[0]?.uri}}
                        style={[styles.image, {height:width}]}
                        resizeMode="contain"
                    />
                </View>
                <View style={{marginLeft:15}}>
                    <Text style={{fontFamily:"NotoSansKR-Bold", fontSize:16}}>답변을 작성해 보세요</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        placeholder='답변을 입력하세요'
                        value={description}
                        onChangeText={setDiscription}
                    />
                </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
    block:{
    },
    image:{width:'100%', marginBottom:0},
    input:{
        marginHorizontal:20,
        marginLeft:15,
        marginTop:2,
        height:153,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#FFC149',
        textAlignVertical:'top'
    }
})

export default UploadAnswerScreen;