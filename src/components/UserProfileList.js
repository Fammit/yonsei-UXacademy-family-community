import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import UserProfile from './UserProfile';

const renderItem = ({item}) => (
    <UserProfile text={item.text}/>
);

function UserProfileList ({profile}) {
    return (
        <FlatList
            style={styles.wrapper}
            data={profile}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-between'}}/>
            
    );
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        paddingVertical:10
    }
});

export default UserProfileList;
