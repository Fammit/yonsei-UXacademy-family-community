import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

function AlarmButton() {
    return (
        <View style={styles.wrapper}>
            <Icon name="bell" size={28}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'red'
    }
});

export default AlarmButton;
