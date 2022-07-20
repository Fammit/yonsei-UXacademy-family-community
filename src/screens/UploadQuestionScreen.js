import React,{useState} from 'react';
import { StyleSheet,  View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import QuestionInput from '../components/atoms/question_input';
import MemberProfile from '../components/atoms/member_profile';
import { useUserContext } from '../contexts/UserContext';
import {createQuestion} from '../lib/family';

function UploadQuestionScreen() {
    const {user} = useUserContext();
    
    
    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.text}>질문 올리기</Text>
                <TouchableOpacity 
                    style={styles.button}
                >
                    <Icon name="checkcircleo" size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={styles.form}>
                <View>
                    <Text style={{marginLeft:20}}>받는사람</Text>
                    <MemberProfile/>
                </View>
                <View style={{marginLeft:20}}>
                    <Text>질문 작성하기</Text>
                </View>
                <QuestionInput/>
            </View>
            <View style={styles.footer}>
                <Text>추천 질문이 필요한가요?</Text>
            </View>
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
    form:{
        flex:1,
        marginTop:20,
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
    button:{
        position:'absolute',
        marginTop:3,
        right:30
    }
});

export default UploadQuestionScreen;