import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import {Text} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const imagePickerOption = {
  mediaType : 'photo',
  maxWidth : 768,
  maxHeight : 768,
  quality:1,
  includeBase64 : Platform.OS === 'android'
};

function SelectTypeView({data, isAnswered}) {
    const navigation = useNavigation();
    
    const onPickImage = (res) => {
      if (res.didCancel || !res) {
        return;
      }
      navigation.push('UploadAnswerScreen', {res, data, isAnswered});
      console.log(res);
    }
    
    //카메라 실행
    const onLaunchCamera = () => {
      launchCamera(imagePickerOption, onPickImage);
    }

    //앨범 열기 실행
    const onLaunchImageLibrary = () => {
      launchImageLibrary(imagePickerOption, onPickImage);
    }

    return (
      <View style={styles.wrapper}>
        <View style={styles.dataHeader}>
          <TouchableOpacity onPress={onLaunchCamera}>
            <Image source={require('../../../assets/icons/icon-camera.png')}/>
            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>카메라</Text>
          </TouchableOpacity>
          <View style={styles.verticleLine}/>
          <TouchableOpacity onPress={onLaunchImageLibrary}>
            <Image source={require('../../../assets/icons/icon-album.png')}/>
            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>앨범</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataFooter}>
        <TouchableOpacity>
            <Image source={require('../../../assets/icons/icon-microphone.png')}/>
            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>음성 녹음</Text>
          </TouchableOpacity>
          <View style={styles.verticleLine}/>
          <TouchableOpacity>
            <Image source={require('../../../assets/icons/icon-text.png')}/>
            <Text style={{fontFamily:'NotoSansKR-Bold', fontSize:16}}>글쓰기</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    marginBottom:30,
    alignItems:'center'
  },
  dataHeader:{
    paddingTop: 70,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  dataFooter:{
    marginRight:14,
    paddingTop: 10,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  verticleLine: {
    height: 150,
    width: 2,
    backgroundColor: '#909090',
  }
})

export default SelectTypeView;