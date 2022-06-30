import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function SaveButton() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Icon name="bookmark" size={28} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        margin:15,
    }
})

export default SaveButton;
