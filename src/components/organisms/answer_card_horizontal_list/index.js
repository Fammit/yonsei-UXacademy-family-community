import React, {useState, useEffect, useRef} from 'react';
import { 
    StyleSheet,
    FlatList, 
    Text,
    ScrollView, 
    Animated,
    View 
} from 'react-native';

import {getAnswer} from '../../../lib/answer';

import AnswerCard from '../../atoms/answer_card';

const renderItem = ({item}) => {
    return(
        //애니메이션 view 전체 영역
        <View>
            <AnswerCard 
                photoURL={item.photoURL}
                answerId={item.answerId}
                info={item.info}
                answerPhotoURL={item.answerPhotoURL}
            />
        </View> 
    )
}

function AnswerCardHorizontalList() {
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAnswer();
                setAnswer(res);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    },[])
    //console.log('Frontend DEBGUG=', answer);

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            style={styles.wrapper}
            data={answer}
            renderItem={renderItem}
            keyExtractor={item => `${item.answerId}`}
        />   
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