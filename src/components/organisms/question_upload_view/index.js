import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemberProfileList from '../../molecules/member_profile_list';
import UploadQuestionInput from '../../atoms/upload_question_input';

function QuestionUploadView({setQuestion}) {
    return (
        <View style={styles.form}>
            <MemberProfileList/>
            <UploadQuestionInput setQuestion={setQuestion}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        marginTop:50,
    },
})

export default QuestionUploadView;