import React, {useEffect, useState} from 'react';
import { 
    StyleSheet,
    StatusBar,
    View } 
from 'react-native';
import {Text} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import FamilyImageView from '../components/organisms/family_image_view';
import SystemMsgForm from '../components/atoms/system_message_form';
import QuestionCardList from '../components/organisms/question_card_list';

import { getsIsQuestioned } from '../lib/question';

function HomeScreen() {
    const [isQuestioned, setIsQuestioned] = useState();    

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
    
    return (
        <>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'}/>
            <ScrollView 
                style={styles.wrapper}
            >
                <FamilyImageView isQuestioned={isQuestioned}/>
                {!isQuestioned ? (
                    <View>
                        <Text style={{marginHorizontal:8, fontFamily:'NotoSansKR-Bold'}}>나에게 도착한 질문❓</Text>
                        <Text>아직 질문이 없습니다.</Text>
                    </View>
                ) : (
                    <View>
                        <QuestionCardList/>
                    </View>
                )}  
            </ScrollView>
        </>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
    list:{
        marginTop:15,
        marginHorizontal:15,
    }
});

export default HomeScreen;
