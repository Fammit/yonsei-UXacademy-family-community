import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-paper'

function SocialAuthButton({title, type}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {navigation.navigate('SignUpScreen')}}>
            <Icon name={type} size={30}/>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{title}</Text>
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
        borderRadius:20,
        marginHorizontal:15,
        marginVertical:10,
        paddingLeft:30,
    },
    wrapper:{
        marginLeft:80,
    },
    text:{
        fontSize:16,
        fontFamily:'NotoSansKR-Bold'
    }
});
export default SocialAuthButton;
