import React from 'react';
import { 
    StyleSheet, 
    Text,
    TouchableOpacity, 
    Image,
    View 
} from 'react-native';

import AnswerMemberCircle from '../answer_member_circle';

function AnswerCard({answerId, photoURL, info, answerPhotoURL}) {
    return (
        //애니메이션 적용 컴포넌트
        <TouchableOpacity style={styles.wrapper}>
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
        width:170,
        height:220,
        marginHorizontal:10,
        borderRadius:20,
        backgroundColor:'grey'
    },
    image:{
        width:170,
        height:220,
        borderRadius:20,
        height:'100%',
    }
});

export default AnswerCard;
