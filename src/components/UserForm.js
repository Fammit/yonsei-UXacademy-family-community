import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserCircle from './UserCircle';
import ToolCircle from './ToolCircle';
import { icon } from '../data/dummy';

//Where can I have to use map func?
function UserForm({source}) {
    return (
        <View>
            <UserCircle source={source}/>
            {icon.map((item, idx) => (
                <View key={idx} style={styles.circle}>
                    <ToolCircle name={item.name}/>
                </View>
            ))}
            <ToolCircle/>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        alignItems:'center',
        justifyContent:'center',
        width:37,
        height:37,
        borderRadius:17,
        marginVertical:28,
        marginLeft:2,
        backgroundColor:'blue'
    }
});

export default UserForm;
