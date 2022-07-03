import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SocialAuthButton({text}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {navigation.navigate('SignInScreen')}}>
            <View style={styles.textWrapper}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        marginVertical:5,
        marginHorizontal:25,
        borderRadius:25,
        backgroundColor:'grey',
    },
    textWrapper:{
        marginLeft:95
    }
});
export default SocialAuthButton;
