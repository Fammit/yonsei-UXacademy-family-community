import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { formatDate } from '../../../constant/date';

import MemberProfile from '../member_profile';


const {height, width} = Dimensions.get('screen');

//불필요한 컴포넌트
function QuestionBox({data}) {
    return (
        <View style={[styles.box]}>
            <MemberProfile info={data.info} photoURL={data.photoURL}/>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.text}>{data.question}</Text>
            </View>
            <Text style={styles.time}>{formatDate(new Date(data.createdAt.seconds*1000))}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        marginTop:90,
        paddingVertical: 55,
        paddingHorizontal: 15,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#FFC149',
        backgroundColor:'#FFF5E2'
    },
    textWrapper:{
        marginBottom:25,
        marginLeft:15,
        position:'absolute',
        left:10,
        bottom:1,
    },
    text:{
        fontSize:14,
        //maxWidth:width/2
    },
    time:{
        color:'#8A8686',
        fontWeight:'bold',
        position:'absolute',
        right:10,
        top:10,
        marginRight:20,
        marginBottom:10
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowOpacity: 0.89,
        shadowRadius:3.84,
        elevation:5,
    }
});

export default QuestionBox;
