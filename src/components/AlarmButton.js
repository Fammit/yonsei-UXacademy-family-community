import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

function AlarmButton() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Icon name="bell" size={28}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        margin:10,
    }
});

export default AlarmButton;
