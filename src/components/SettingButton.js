import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function SettingButton() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Icon name="dots-three-horizontal" size={28} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        margin:15,
    }
});

export default SettingButton;
