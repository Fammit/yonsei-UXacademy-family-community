import React from 'react';
import { 
    StyleSheet, 
    View, 
    TouchableOpacity,
    Image  
} from 'react-native';
import {Text} from 'react-native-paper';

import { formatDate } from '../../../constant/date';

function AnswerMemberCircle({info, photoURL, createdAt}) {
    console.log(createdAt);
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity 
                style={styles.circle}
                onPress={()=>navigation.navigate('MemberInfoScreen')}>
                <Image style={{width:50, height:50}}source={{uri:photoURL}}/>
            </TouchableOpacity>
            <Text 
                style={{marginLeft:5, marginTop:1, fontFamily: 'NotoSansKR-Bold'}}>
                    {info}
            </Text>
            <Text
                style={{position:'absolute', bottom:2, right:1 }}
            >{formatDate(new Date(createdAt.seconds*1000))}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:8,
        flexDirection:'row',
        paddingHorizontal:5,
        position:'absolute',
        left:3,
        bottom:10,
    },
    circle:{
        width:50,
        height:50,
        borderRadius:33,
        backgroundColor:'grey'
    }
})

export default AnswerMemberCircle;