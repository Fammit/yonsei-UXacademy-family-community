import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function LikeButton() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity>
                <Icon name="hearto" size={28} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        margin:15,
    }
})

export default LikeButton;
