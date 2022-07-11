import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Fontisto';

const TABBAR_HEIGHT=49;

function UploadButton({openMenu}) {
    const insets = useSafeAreaInsets();

    const bottom = Platform.select({
        android: TABBAR_HEIGHT / 2,
        ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
    });

    return (
        <View style={[styles.wrapper, {bottom}]}>
            <TouchableOpacity
                style={styles.circle}
                onPress={openMenu}>
                <Icon name="plus-a" size={36}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        zIndex:5,
        position:'absolute',
        left:'50%',
        transform:[
            {
                translateX:-27
            }
        ],
        borderRadius:27,
        backgroundColor:'E1DDDD',
        height:54,
        width:54
    },
    circle:{
        width:54,
        height:54,
        borderRadius:27,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default UploadButton
