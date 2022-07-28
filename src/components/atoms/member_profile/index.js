import React from 'react';
import { 
  StyleSheet, 
  View,
  TouchableOpacity,
  Image 
} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function MemberProfile({info, photoURL}) {
  const navigation = useNavigation();
  
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity 
        style={styles.circle}
        onPress={()=>navigation.navigate('MemberInfoScreen')}>
          <Image style={{width:50, height:50}}source={{uri:photoURL}}/>
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
    marginTop:8,
    flexDirection:'row',
    paddingHorizontal:5,
    position:'absolute',
    left:3,
    top:2,
  },
  circle:{
        width:50,
        height:50,
        borderRadius:33,
        backgroundColor:'grey'
  }
})

export default MemberProfile;