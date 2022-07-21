import React from 'react';
import { 
  StyleSheet, 
  View,
  TouchableOpacity,
  Image 
} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function MemberProfile({info}) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity 
        style={styles.circle}
        onPress={()=>navigation.navigate('MemberInfoScreen')}>
      </TouchableOpacity>
      <Text 
        style={{marginLeft:5, marginTop:1, fontFamily: 'NotoSansKR-Bold'}}>
          {info}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:'row',
    paddingHorizontal:5,
    position:'absolute',
    left:3,
    top:10,
  },
  circle:{
        width:40,
        height:40,
        borderRadius:33,
        backgroundColor:'grey'
  }
})

export default MemberProfile;