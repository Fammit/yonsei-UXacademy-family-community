import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Image 
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function MemberProfile() {
  const navigation = useNavigation();
  
  return (
    <View>
      <TouchableOpacity 
        style={styles.circle}
        onPress={()=>navigation.navigate('MemberInfoScreen')}>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  circle:{
        width:60,
        height:60,
        borderRadius:33,
        margin:17,
        marginBottom:10,
        backgroundColor:'grey'
  }
})

export default MemberProfile;