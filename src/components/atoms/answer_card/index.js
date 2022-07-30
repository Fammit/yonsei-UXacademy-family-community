import React from 'react';
import { 
    StyleSheet, 
    Text,
    TouchableOpacity, 
    Image,
    View,
    Animated, 
} from 'react-native';

import AnswerMemberCircle from '../answer_member_circle';
const ITEM=10;
function AnswerCard({answerId, photoURL, info, answerPhotoURL, translateY}) {
    return (
        //애니메이션 적용 컴포넌트
        <TouchableOpacity style={[styles.wrapper, {transform:[{translateY}], marginHorizontal:ITEM} ]}>
            <Image
                style={styles.image}
                source={{uri:answerPhotoURL}}
                resizeMethod='resize'
                resizeMode='cover'
            />
                <AnswerMemberCircle info={info} photoURL={photoURL}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:190,
        height:240,
        borderRadius:20,
        backgroundColor:'grey',
        
    },
    image:{
        width:190,
        height:240,
        borderRadius:20,
        height:'100%',
    }
});

export default AnswerCard;
