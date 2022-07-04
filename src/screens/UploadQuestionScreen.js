import React from 'react';
import { StyleSheet,  View, Text, ScrollView } from 'react-native';
import InputQuestion from '../components/InputQuestion';
import User from '../components/User';

function UploadQuestionScreen() {
    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.text}>질문 올리기</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.form}>
                <User/>
                <View style={{marginLeft:20}}>
                    <Text>질문 작성하기</Text>
                </View>
                <InputQuestion/>
            </View>
            <View style={styles.footer}>
                <Text>df</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1
    },
    header:{
        flexDirection:'row',
        marginVertical:25,
    },
    form:{
        flex:1,
        marginTop:5,
        backgroundColor:'blue'
    },
    footer:{
        height:250,
        backgroundColor:"green"
        
    },
    line:{
        borderBottomColor:'black', 
        borderBottomWidth:1
    },
    text:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold'
    }
});

export default UploadQuestionScreen;