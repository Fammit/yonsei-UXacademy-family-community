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

import { createAnswer } from '../lib/answer';
import { getAllUser } from '../lib/users';

function UploadAnswerScreen() {
    const [answer, setAnswer] = useState('');
    const [member, setMember] = useState([]);
    
    const {user} = useUserContext();
    
    const route = useRoute();
    const questionDocId= route.params.key
    
    const onAnswerSubmit = () => {
        createAnswer({user, member, answer, questionDocId})
    }

    //전체 사용자 데이터 요청 : array
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllUser();
                setMember(res);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

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