import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import QuestionCard from '../../atoms/question_card';

const data = [
    {
        id:0,
        info: '현지',
        question: '뭐해요?'
    },
    {   
        id:1,
        info: '아빠',
        question: '뭐해?'
    },

]

const renderItem = ({item}) => {
    return(
        <View>
            <QuestionCard/>
        </View>
    )
}

function QuestionCardList() {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default QuestionCardList;
