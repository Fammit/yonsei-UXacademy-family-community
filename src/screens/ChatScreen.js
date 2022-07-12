import React, {useRef, useState, useEffect} from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import {getPosts} from '../lib/posts';

function ChatScreen() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);
    console.log('front:', posts);
    return(
        <View>
            <Text>ASDF</Text>
        </View>
    )
    
};
    
const styles = StyleSheet.create({
    button:{
        width:56,
        height:56,
        backgroundColor:'grey',
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ChatScreen;
