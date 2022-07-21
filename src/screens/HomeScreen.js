import React, {useEffect, useState} from 'react';
import { 
    StyleSheet, 
    View } 
from 'react-native';
import {Text} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import { getSystemMsg } from '../lib/systemMessage';

import FamilyImageView from '../components/organisms/family_image_view';
import SystemMsgForm from '../components/atoms/system_message_form';
import QuestionCardList from '../components/organisms/question_card_list';

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
    
    return (
        <ScrollView 
            style={styles.wrapper}
        >
            <FamilyImageView/>
            <SystemMsgForm />
            {!isQuestioned ? (
                <View>
                    <Text>아직 질문이 없습니다.</Text>
                </View>
            ) : (
                <View>
                    <QuestionCardList/>
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
