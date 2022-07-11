import React, {useRef} from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UploadButton from '../components/UploadButton';

import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

function ChatScreen() {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
   return(
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('UploadQuestionScreen')}>
                <Text>질문 올리기</Text>
            </TouchableOpacity>
        </Modal>
      </Portal>
      <UploadButton style={{marginTop: 30}} onPress={showModal}/>
    </Provider>
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
