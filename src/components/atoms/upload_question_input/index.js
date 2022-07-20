import React from 'react';
import { StyleSheet,  View, TextInput } from 'react-native';
import {Text} from 'react-native-paper'

function UploadQuestionInput({setQuestion}) {
    return (
        <View style={styles.wrapper}>
            <Text>질문 작성하기</Text>
            <TextInput
                onChangeText={setQuestion}
                placeholder='질문을 입력하세요'
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginLeft:20
    },
    input:{
        marginHorizontal:20,
        marginLeft:3,
        marginTop:10,
        height:83,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'grey'
    }

})

export default UploadQuestionInput;