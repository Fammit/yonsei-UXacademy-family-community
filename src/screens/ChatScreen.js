import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import { v4 as uuidv4 } from 'uuid';
import { useUserContext } from '../contexts/UserContext';

import { getIsCreatedFamily } from '../lib/family';
import { getFamilyId } from '../lib/family';
import { getAllUser } from '../lib/users';
import { createFamily } from '../lib/family';

function ChatScreen() {
    const {user} = useUserContext();
    const [member, setMember] = useState([]);
    const [isFamilyCreated, setIsFamilyCreated] = useState(false);

    //가족 생성 실행
    const onSubmit = () => {
        const familyId = uuidv4();
        member.map((item) => {
            createFamily({
                familyId: familyId,
                id: item.id,
                info: item.info,
            })
        });
    }

    //가족 생성 여부 데이터 요청 : boolean
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getIsCreatedFamily(user.id);
                setIsFamilyCreated(true);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

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

    return(
        <>
            {isFamilyCreated ? (
                <View>
                    <Text>생성 완료</Text>
                </View>
            ) : (
                <View>
                    {member.map((item) => (
                        <Text key={item.id}>{item.info}</Text>
                    ))}
                    <TouchableOpacity onPress={onSubmit}  style={{backgroundColor:'blue'}}>
                        <Text>생성</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
};
    
const styles = StyleSheet.create({
    button:{
        width:56,
        height:56,
        backgroundColor:'grey',
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ChatScreen;
