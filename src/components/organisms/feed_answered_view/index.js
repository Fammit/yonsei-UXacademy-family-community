import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemberHeader from '../../molecules/member_header';
import AnsweredForm from '../../molecules/answered_form';

function FeedAnsweredView({photoURL}) {
    return (
        <View style={styles.wrapper}>
            <MemberHeader/>
            <AnsweredForm photoURL={photoURL}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        height:480,
    }
});

export default FeedAnsweredView;