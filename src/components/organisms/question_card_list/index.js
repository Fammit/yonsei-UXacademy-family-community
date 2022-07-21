import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Text} from 'react-native-paper';

import { useUserContext } from '../../../contexts/UserContext';

import { getQuestion } from '../../../lib/question';

import QuestionCard from '../../atoms/question_card';

const renderItem = ({item}) => {
    return(
        <View>
            <QuestionCard 
                info={item.from.info}
                questionId={item.questionId}
                question={item.question}
            />
        </View> 
    )
}

function QuestionCardList() {
    const {user} = useUserContext();
    const [question, setQuestion] = useState([]);

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
    }, [question]);

    return (
        <View style={styles.wrapper}>
            <Text style={{marginHorizontal:8, fontFamily:'NotoSansKR-Bold'}}>나에게 도착한 질문</Text>
            <FlatList
                data={question}
                renderItem={renderItem}
                keyExtractor={item => `${item.questionId}`}
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
