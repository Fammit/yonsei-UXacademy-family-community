import React, {useEffect, useState} from 'react'
import { 
    StyleSheet, 
    View,
    StatusBar,
    FlatList,
    RefreshControl 
} from 'react-native'
import {Text} from 'react-native-paper';

import { useUserContext } from '../contexts/UserContext';
import SplashScreen from 'react-native-splash-screen';

import FamilyImageView from '../components/organisms/family_image_view';
import QuestionCard from '../components/atoms/question_card';

import { getsIsQuestioned } from '../lib/question';
import { getQuestion } from '../lib/question';
import { getNewerQuestion } from '../lib/question';

const HomeScreen = () => {
    const {user} = useUserContext();
    //전체 질문 여부 상태
    const [isQuestioned, setIsQuestioned] = useState();    
    //질문 내용 상태
    const [question, setQuestion] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    //로그인했을 경우 HOMESCREEN 렌더
    const questionReady = question != null;

    //새로고침 실행
    const onRefresh = async () => {

        if(!question || question.length === 0 || refreshing){
            return;
        }

        const firstQuestion = question[0];
        setRefreshing(true);
        const newerQuestion = await getNewerQuestion(firstQuestion.questionId);
        setRefreshing(false);
        if(newerQuestion.length === 0) {
            return;
        }
        setQuestion(newerQuestion.concat(question));
    };

    useEffect(() => {
        if(questionReady){
            SplashScreen.hide();
        }
    }, [questionReady])
     //최초 사용 시 질문 내역 여부 확인 요청
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getsIsQuestioned();
                setIsQuestioned(res);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    },[]);

    //질문 reqeust
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getQuestion(user.id);
                setQuestion(res);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    
    return (    
        <FlatList
            style={{backgroundColor:'white'}}
            data={question}
            keyExtractor={item => `${item.questionId}`}
            refreshControl={
                <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>
            }
            ListHeaderComponent={
                <>
                    <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
                    <View style={styles.wrapper}>
                        <FamilyImageView isQuestioned={isQuestioned}/>
                    </View>
                    <View style={{ marginTop:24, borderBottomColor:'#FAF8F4', borderBottomWidth:10}}/>
                    <View style={{marginLeft:20, marginTop:1, paddingVertical:0}}>
                        <Text style={{marginHorizontal:4, fontFamily:'NotoSansKR-Bold', fontSize:16}}>나에게 도착한 질문</Text>
                    </View>

                </>
            }
            renderItem={({item}) => {
                return(
                    <>
                        {!isQuestioned ? (
                            <View>
                                <Text style={{marginHorizontal:8, fontFamily:'NotoSansKR-Bold'}}>나에게 도착한 질문❓</Text>
                                <Text>아직 질문이 없습니다.</Text>
                            </View>
                        ) : (
                            <View style={styles.list}>
                                <QuestionCard 
                                    key={item.questionId}
                                    questionId={item.questionId}
                                    info={item.from.info}
                                    photoURL={item.from.photoURL}
                                    question={item.question}
                                    createdAt={item.createdAt}
                                />
                            </View> 

                        )}
                    </>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
    list:{
        marginHorizontal:15,
    }
})

export default HomeScreen;