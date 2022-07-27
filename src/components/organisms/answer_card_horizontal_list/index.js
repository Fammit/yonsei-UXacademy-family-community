import React from 'react';
import { 
    StyleSheet, 
    Text,
    ScrollView, 
    Animated,
    View 
} from 'react-native';

import AnswerCard from '../../atoms/answer_card';

function AnswerCardHorizontalList() {
    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.wrapper}
        >
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
            <AnswerCard/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        marginBottom:10,
        position:'absolute',
        bottom:5,
    }
});

export default AnswerCardHorizontalList;