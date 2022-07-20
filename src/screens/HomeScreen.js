import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FamilyImageView from '../components/organisms/family_image_view';
import SystemMsgForm from '../components/atoms/system_message_form';
import { getSystemMsg } from '../lib/systemMessage';

function HomeScreen() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        getSystemMsg().then(setMessage);
    })

    //사용자 목록 컴포넌트 삭제
    //답변 & 일상 post 컴포넌트 생성 --> Horizontal
    //질문 카드 컴포넌트 생성 --> Vertical
    return (
        <View style={styles.wrapper}>
            {/*백그라운드 이미지*/}
            <FamilyImageView/>
            {/*시스템 메시지*/}
            <SystemMsgForm message={message}/>
            {/*사용자 목록*/}
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
});

export default HomeScreen;
