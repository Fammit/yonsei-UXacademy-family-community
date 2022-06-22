import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function ToolCircle({name}) {
    return (
        <View>
            <Icon name={name} size={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default ToolCircle;
