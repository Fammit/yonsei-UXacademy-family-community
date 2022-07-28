import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import MemberProfile from '../../atoms/member_profile';

function MemberProfileList() {
    return (
        <View>
            <Text 
                style={{
                    marginLeft:20,
                    fontFamily:'NotoSansKR-Bold',
                    fontSize:16
                    }}>
                    질문 받는 사람
            </Text>
            {/* <MemberProfile/> */}
        </View>
    )
}

const styles = StyleSheet.create({})

export default MemberProfileList;