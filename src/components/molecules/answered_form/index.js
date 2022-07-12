import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import QuestionForm from '../../atoms/question_form';

function AnsweredForm({photoURL}) {
    console.log('front:', photoURL)
    
    
    return (
        <View style={styles.wrapper}>
            <View style={styles.block}>
                    <Image
                        source={{uri: photoURL}}
                        style={{width:'100%', aspectRatio:1, }}
                        resizeMethod='resize'
                        resizeMode='cover'/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
    },
    block:{
        width:370,
        height:370,
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'grey'
    }
})

export default AnsweredForm;