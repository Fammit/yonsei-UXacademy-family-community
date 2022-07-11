import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Fontisto';
import UploadModal from '../../organisms/upload_modal';

const TABBAR_HEIGHT=49;

function UploadButton({onPress}) {
    const navigation = useNavigation();

    const insets = useSafeAreaInsets();
    const [modalVisible, setModalVisible] = useState(false);

    const bottom = Platform.select({
        android: TABBAR_HEIGHT / 2,
        ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
    });

    return (
        <>
            <View style={[styles.wrapper, {bottom}]}>
                <TouchableOpacity
                    style={styles.circle}
                    onPress={() => setModalVisible(true)}>
                    <Icon name="plus-a" size={36}/>
                </TouchableOpacity>
            </View>
            <UploadModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}/>
        </>
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
        backgroundColor:'gray',
        height:50,
        width:50
    },
    circle:{
        width:50,
        height:50,
        borderRadius:27,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default UploadButton
