import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function LikeButton() {
    return (
        <TouchableOpacity>
                <Icon name="hearto" size={28} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default LikeButton;