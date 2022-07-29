import React, {useState, useEffect} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity, 
    TextInput 
} from 'react-native';

import { useUserContext } from '../contexts/UserContext';
import { useRoute } from '@react-navigation/native';

import { getIsAnswered } from '../lib/answer';
import { createAnswer } from '../lib/answer';

import QuestionBox from '../components/atoms/question_box';
import SelectTypeView from '../components/organisms/select_type_view';

function SelectAnswerTypeScreen() {
    const {user} = useUserContext();
    const route = useRoute();
    // const questionDocId= route.params.key
    
    // const [answer, setAnswer] = useState('');
    // const [isAnswered, setIsAnswered] = useState([]);
    
    const {data} = route.params || {};
    // const onAnswerSubmit = () => {
    //     createAnswer({user, isAnswered, answer, questionDocId})
    // }
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try{
    //             const res = await getIsAnswered({questionDocId})
    //             setIsAnswered(res);    
    //         } catch(error) {
    //             console.log(error);
    //         }  
    //     };
    //     fetchData();
    // },[])

    return (
        <View style={styles.wrapper}>
            <QuestionBox data={data}/>
            <SelectTypeView data={data}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    }
})

export default SelectAnswerTypeScreen;