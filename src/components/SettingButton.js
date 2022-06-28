import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function SettingButton() {
    return (
        <View style={styles.wrapper}>
            <Icon name="dots-three-horizontal" size={28} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        margin:10,
        backgroundColor:'blue'
    }
});

export default SettingButton;
