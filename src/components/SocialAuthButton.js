import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

function SocialAuthButton({text}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {navigation.navigate('SignUpScreen')}}>
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
        height:48,
        borderWidth:1,
        borderRadius:25,
        marginHorizontal:15,
        marginVertical:10,
        backgroundColor:'grey',
    },
    textWrapper:{
        marginLeft:95
    }
});
export default SocialAuthButton;
