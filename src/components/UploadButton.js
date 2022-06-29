import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import UploadModal from './UploadModal';

function UploadButton() {
    const [modalVisible, setModalVisible] = useState(false);
    const onPress = () => {
        setModalVisible(true);
    }
    return (
        <>
            <View style={styles.wrapper}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onPress}>
                    <Icon name="plus-a" size={28} color="white"/>
                </TouchableOpacity>
            </View>
            {/*모달 실행*/}
            <UploadModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}/>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        right:25,
        top:135
    },
    button:{
        width:56,
        height:56,
        backgroundColor:'grey',
        borderRadius:28,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default UploadButton
