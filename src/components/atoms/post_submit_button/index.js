import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function PostSubmitButton({name, color, onPress}) {
    return (
        <View>
            <TouchableOpacity
                style={(pressed) => [
                    styles.circle,
                    Platform.OS === 'ios' &&
                        pressed && {
                            opacity: 0.3
                        },
                ]}
                onPress={onPress}
                android_ripple={{color:'black'}}>
                    <Icon name={name} color={color} size={24}/>
            </TouchableOpacity>
        </View>
    );
}

PostSubmitButton.defaultProps = {
    color:'black'
};

const styles = StyleSheet.create({
    wrapper:{
        marginRight: -8,
        borderRadius: 24,
        overflow:'hidden'
    },
    circle:{
        height:48,
        width:48,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default PostSubmitButton;