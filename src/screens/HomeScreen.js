import React, {useEffect, useState} from 'react';
import { 
    ScrollView, 
    StyleSheet, 
    View } 
from 'react-native';
import {Text} from 'react-native-paper';

import { getSystemMsg } from '../lib/systemMessage';

import FamilyImageView from '../components/organisms/family_image_view';
import SystemMsgForm from '../components/atoms/system_message_form';
import QuestionCard from '../components/molecules/question_card';

import { getQuestion } from '../lib/question';
import { getsIsQuestioned } from '../lib/question';

function HomeScreen() {
    const [question, setQuestion] = useState([]);
    const [isQuestioned, setIsQuestioned] = useState();    

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
    
    
    //console.log('FRONT DEBUG:', isQuestioned);

    return (
        <ScrollView style={styles.wrapper}>
            <FamilyImageView/>
            <SystemMsgForm />
            {!isQuestioned ? (
                <View>
                    <Text>아직 질문이 없습니다.</Text>
                </View>
            ) : (
                <View>
                    <QuestionCard/>
                </View>
            )}
        </ScrollView>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
});

export default HomeScreen;
