import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useUserContext} from '../contexts/UserContext';

function ListItem({ text }) {
    const {user} = useUserContext();
    //console.log(typeof(text));

    return (
        <View style={styles.container}>
            <View style={styles.circle}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:16,
        alignItems:'center'
    },
    circle:{
        width:24,
        height:24,
        borderWidth:1,
        borderRadius:12,
        borderColor:'black',
        marginRight:16
    },
    text:{
        flex:1,
        fontSize:25,
        color:'black'
    }
})
export default ListItem