import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

function NotificationButton() {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                onPress={() => navigation.navigate('NotificationScreen')}>
                    <Image
                        source={require('../../../assets/icons/icon-bell.png')}
                    />
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
