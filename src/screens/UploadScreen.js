import React, {useState, useRef, useEffect, useCallback} from 'react';
import { useRoute } from '@react-navigation/native';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    Animated,
    Keyboard,
    useWindowDimensions,
    TextInput, 
    Platform
} from 'react-native';
import storage from '@react-native-firebase/storage';
import PostSubmitButton from '../components/atoms/post_submit_button';
import { useNavigation } from '@react-navigation/native';
import {useUserContext} from '../contexts/UserContext';
import {v4} from 'uuid';
import {createPost} from '../lib/posts';
import { create } from 'react-test-renderer';

function UploadScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const {res} = route.params || {};
    const {width} = useWindowDimensions();
    const animation = useRef(new Animated.Value(width)).current;
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const [description, setDiscription] = useState('');

    const {user} = useUserContext();

    //포스트 작성 API
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
        await createPost({description, photoURL, user});
    }, [res, user, description, navigation]);

    useEffect(() => {
        const didShow = Keyboard.addListener('keyboardDidShow', () =>
            setIsKeyboardOpen(true),
        );
        const didHide = Keyboard.addListener('keyboardDidHide', () => 
            setIsKeyboardOpen(false),
        );

        return () => {
            didShow.remove();
            didHide.remove();
        };
    }, []);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: isKeyboardOpen ? 0 : width,
            useNativeDriver: false,
            duration: 150,
            delay: 100,
        }).start();
    }, [isKeyboardOpen, width, animation]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <PostSubmitButton onPress={onSubmit} name="send"/>
        });
    }, [navigation, onSubmit])


    return (
        <View style={styles.wrapper}>
            <Animated.Image
                source={{uri: res.assets[0]?.uri}}
                style={[styles.image, {height: animation}]}
                resizeMode="cover"/>
            <TextInput
                style={styles.input}
                multiline={true}
                placeholder="이 사진에 대한 설명을 입력하세요"
                textAlignVertical="top"
                value={description}
                onChangeText={setDiscription}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    image:{width:'100%'},
    input:{
        paddingHorizontal:16,
        paddingTop:16,
        paddingBottom:16,
        flex:1,
        fontSize:16,
    }
})

export default UploadScreen;