import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserCircle from './UserCircle';
import ToolCircle from './ToolCircle';

function UserForm() {
    return (
        <View>
            <UserCircle/>
            <ToolCircle/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default UserForm;
