import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function SettingButton() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Icon name="dots-three-vertical" size={28} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        margin:15,
        marginRight:3
    }
});

export default SettingButton;
