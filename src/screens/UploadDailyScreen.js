import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const imagePickerOption = {
  mediaType : 'photo',
  maxWidth : 768,
  maxHeight : 768,
  includeBase64 : Platform.OS === 'android'
};

function UploadDailyScreen() {
  const navigation = useNavigation();

  const onPickImage = (res) => {
    if (res.didCancel || !res) {
      return;
    }
    navigation.push('UploadScreen', {res});
    console.log(res);
  }

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  }

  return (
    <TouchableOpacity
      onPress={onLaunchImageLibrary}>
      <Text>이미지 업로드</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export default UploadDailyScreen;