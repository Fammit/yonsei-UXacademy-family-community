import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UploadButton from '../components/UploadButton';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Fontisto';

function ChatScreen() {
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation();
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <Provider>
            <View
                style={{
                    
                }}>
                <Menu
                    style={{position:'absolute', bottom:50}}
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <TouchableOpacity
                            style={styles.button}
                            onPress={openMenu}>
                            <Icon name="plus-a" size={28} color="white"/>
                        </TouchableOpacity>
                    }>
                    <Menu.Item onPress={() => navigation.navigate('SetUpScreen')} title="질문 올리기" />
                    <Menu.Item onPress={() => {}} title="일상 올리기" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
            </View>
        </Provider>
    );   
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
