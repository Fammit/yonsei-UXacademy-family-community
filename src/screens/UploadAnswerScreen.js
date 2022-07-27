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

function UploadAnswerScreen() {
    const [answer, setAnswer] = useState('');
    const [isAnswered, setIsAnswered] = useState([]);
    
    const {user} = useUserContext();
    
    const route = useRoute();
    const questionDocId= route.params.key
    
    const onAnswerSubmit = () => {
        createAnswer({user, isAnswered, answer, questionDocId})
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await getIsAnswered({questionDocId})
                setIsAnswered(res);    
            } catch(error) {
                console.log(error);
            }  
        };
        fetchData();
    },[])

    return (
        <View>
            <TextInput
                value={answer}
                onChangeText={setAnswer}
            />
            <TouchableOpacity onPress={onAnswerSubmit}>
                <Text>
                    완료
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})

export default UploadAnswerScreen;