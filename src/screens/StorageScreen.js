import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {createPost} from '../lib/posts';

function StorageScreen() {
    const [test, setTest] = useState('');

    const onSubmit = () => {
        createPost({test});
    }

    return (
        <View>
            <Text>test</Text>
            <TextInput placeholder='test' value={test} onChangeText={setTest}/>
            <TouchableOpacity onPress={onSubmit}>
                <Text>submit</Text>
            </TouchableOpacity>
        </View>
    );   
};

const styles = StyleSheet.create({});

export default StorageScreen;
