import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function SettingButton() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Image
                    source={require('../../../assets/icons/icon-dots.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        margin:15,
        marginBottom:6,
        marginRight:3
    }
});

export default SettingButton;
