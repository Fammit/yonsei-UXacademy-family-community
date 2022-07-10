import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function UserProfile({text}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('FeedScreen')}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:175,
        height:130,
        marginVertical:5,
        marginHorizontal:15,
        borderRadius:20,
        backgroundColor:'grey'
    },
    text:{
        fontSize:34,
        textAlign:'center'
    }
})

export default UserProfile;
