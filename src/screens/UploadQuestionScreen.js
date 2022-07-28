import React,{useState, useEffect} from 'react';
import { 
    StyleSheet,  
    View, 
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import {Text, Divider} from 'react-native-paper'
import { useUserContext } from '../contexts/UserContext';

import { createQuestion } from '../lib/question';
import { getAllUser } from '../lib/users';

import UploadQuestionButton from '../components/atoms/upload_question_button';
import QuestionUploadView from '../components/organisms/question_upload_view';
import SystemMessageView from '../components/organisms/system_message_view';

function UploadQuestionScreen() {
    const {user} = useUserContext();
    const [question, setQuestion] = useState('');
    //구성원 전체 정보는 Context API로 전역 상태 관리 필요
    const [member, setMember] = useState([]);
    
    //질문 등록 실행
    const onQuestionSubmit = () => {
        createQuestion({user, member, question})
    }

    //전체 사용자 데이터 요청 : array
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllUser();
                setMember(res);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView style={styles.wrapper}>
            <QuestionUploadView setQuestion={setQuestion}/>
            <View style={{ marginTop:30, borderBottomColor:'#FAF8F4', borderBottomWidth:10}}/>
            <SystemMessageView/>
            {/* <View style={styles.line}></View>
            <QuestionUploadView setQuestion={setQuestion}/>
                <UploadQuestionButton onQuestionSubmit={onQuestionSubmit}/>
            <View style={styles.footer}>
                <Text>추천 질문이 필요한가요?</Text>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    header:{
        alignItems:'center',
        marginVertical:15,
    },
    footer:{
        marginLeft:20,
        marginTop:10,
        height:250,        
    },
    line:{
        borderBottomColor:'black', 
        borderBottomWidth:1,
        marginHorizontal:20,
    },
    text:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    },
});

export default UploadQuestionScreen;