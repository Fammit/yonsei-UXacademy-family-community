import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

function UserProfile({text, source}) {
    return (
        <View>
            <Image
                source={source}
                style={styles.wrapper}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:150,
        height:100,
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'grey'
    }
})

export default UserProfile;
