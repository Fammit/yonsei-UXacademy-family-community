import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UploadButton from './UploadButton';
import {Button, Menu, Divider, Provider} from 'react-native-paper';

function DropdownList() {
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation();
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    
    return (
        <Provider>
            <View
                style={{
                    position:'absolute',
                    right:10,
                    marginTop:3,
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<UploadButton openMenu={openMenu}></UploadButton>}>
                    <Menu.Item onPress={() => navigation.navigate('UploadQuestionScreen')} title="질문 올리기" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="일상 올리기" />
                </Menu>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({})

export default DropdownList;