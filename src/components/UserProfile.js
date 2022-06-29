import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function UserProfile({text, source}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('AnswerScreen')}>
            <View>
                <Image
                    source={source}
                    style={styles.wrapper}/>
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
    }
})

export default UserProfile;
