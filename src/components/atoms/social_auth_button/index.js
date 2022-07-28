import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-paper'

function SocialAuthButton({title, type, check}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.button, check || styles.subBtn]}
            onPress={() => {navigation.navigate('SignUpScreen')}}>
            {check ? (
                <Image source={require('../../../assets/icons/icon_google.png')}
                    style={{width:35,height:35}}/>
            ) : (
            <Icon name={type} size={30}/>
            )}
            {/* <Icon name={type} size={30}/> */}
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
        borderWidth:2,
        borderRadius:20,
        marginHorizontal:30,
        marginVertical:10,
        paddingLeft:30,
    },
    wrapper:{
        marginLeft:55,
    },
    subBtn:{
        backgroundColor:'#FCCD72'
    },
    text:{
        fontSize:16,
        fontFamily:'NotoSansKR-Bold'
    }
});
export default SocialAuthButton;
