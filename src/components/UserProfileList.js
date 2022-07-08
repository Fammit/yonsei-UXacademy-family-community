import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import UserProfile from './UserProfile';
import {test} from '../lib/family';
import ListItem from '../data/ListItem';


function UserProfileList () {
    const [data, setData] = useState('');
    
    useEffect(() => {
        test().then(setData);

    }, [])

    console.log('FRONT',data)
    return (
        <FlatList
            style={styles.wrapper}
            data={data}
            renderItem={({item}) => (
                <View>

                    <UserProfile text={item.info} />
                </View>
            )}
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-evenly'}}/>
            
    );
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        marginVertical:15,
        marginHorizontal:20,
    }
});

export default UserProfileList;
