import React, {useEffect, useState} from 'react';
import { 
    StyleSheet, 
    View, 
    FlatList,
    RefreshControl 
} from 'react-native';
import {Text} from 'react-native-paper';

import { useUserContext } from '../../../contexts/UserContext';

import { getQuestion } from '../../../lib/question';
import { getNewerQuestion } from '../../../lib/question';

import QuestionCard from '../../atoms/question_card';

const renderItem = ({item}) => {
    return(
        <View>
            <QuestionCard 
                key={item.questionId}
                questionId={item.questionId}
                info={item.from.info}
                photoURL={item.from.photoURL}
                question={item.question}
                createdAt={item.createdAt}
            />
        </View> 
    )
}

function QuestionCardList() {
    const {user} = useUserContext();
    //질문 state
    const [question, setQuestion] = useState([]);
    //갱신 state
    const [refreshing, setRefreshing] = useState(false);
    // const firstQuestion = question[0];
    // getNewerQuestion(firstQuestion.questionId);
    //console.log('DEBUG:', refreshing);
    
    //refresh question
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
        <View style={styles.wrapper}>
            <Text style={{marginHorizontal:8, fontFamily:'NotoSansKR-Bold', fontSize:16}}>나에게 도착한 질문</Text>
            <FlatList
                data={question}
                renderItem={renderItem}
                keyExtractor={item => `${item.questionId}`}
                refreshControl={
                    <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:15,
        marginHorizontal:15,
    }
});

export default QuestionCardList;
