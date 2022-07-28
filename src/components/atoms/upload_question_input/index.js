import React from 'react';
import { StyleSheet,  View, TextInput } from 'react-native';
import {Text} from 'react-native-paper'

function UploadQuestionInput({setQuestion}) {
    return (
        <View style={styles.wrapper}>
            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>질문 작성하기</Text>
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
        marginTop:60,
        marginLeft:20
    },
    input:{
        marginHorizontal:20,
        marginLeft:3,
        marginTop:2,
        height:153,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#FFC149',
        textAlignVertical:'top'
    }

})

export default UploadQuestionInput;