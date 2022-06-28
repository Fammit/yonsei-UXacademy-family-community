import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import UserCircle from './UserCircle';
import ToolCircle from './ToolCircle';
import { icon } from '../data/dummy';

//Where can I have to use map func?
function UserForm({profile}) {
    const renderItem = ({item}) => {
        <View>
            <UserCircle id={item.id} source={item.image} />
        </View>
    }

    return (
        <FlatList
            data={profile}
            renderItem={renderItem}
            numColumns={2}
            />
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
