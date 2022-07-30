import React from 'react';
import { 
    StyleSheet, 
    Text,
    TouchableOpacity, 
    Image,
    View 
} from 'react-native';

function AnswerCard({answerId, info, answerPhotoURL}) {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <Image
                style={styles.image}
                source={{uri:answerPhotoURL}}
                resizeMethod='resize'
                resizeMode='cover'
            />
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
