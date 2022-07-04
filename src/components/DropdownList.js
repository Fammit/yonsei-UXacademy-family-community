import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import UploadButton from './UploadButton';

function DropdownList() {
    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);
    
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const openBtn = () => {
        return <UploadButton onPress={openMenu}/>
    }
    return (
        <Provider>
            <View
                style={{
                }}>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <View>
                            <Button onPress={openMenu}>df</Button>
                        </View>
                    }>
                    <Menu.Item onPress={() => navigation.navigate('UploadQuestionScreen')} title="질문 올리기" />
                    <Menu.Item onPress={() => {}} title="일상 올리기" />
                </Menu>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({})

export default DropdownList;