import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SubmitButton() {
    const navigation = useNavigation();

    return (
        <View style={{borderRadius:25}}>
            <TouchableOpacity
                style={styles.wrapper}
                onPress={() => navigation.navigate('MainTab')}>
                <Text>SubmitButton</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        borderRadius:25
    }
});

export default SubmitButton;
