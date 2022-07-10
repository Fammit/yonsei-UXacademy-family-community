import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

function NotificationButton() {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                onPress={() => navigation.navigate('NotificationScreen')}>
                <Icon name="bell" size={28}/>
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

export default NotificationButton;
