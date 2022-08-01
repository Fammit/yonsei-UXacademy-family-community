import React, {useRef, useState, useEffect} from 'react';
import {  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

const data = [
  {
    id:1,
    info:'a', 
  },
  {
    id:2,
    info:'a', 
  },
  {
    id:3,
    info:'a', 
  },
  {
    id:4,
    info:'a', 
  },
  {
    id:5,
    info:'a', 
  },
  {
    id:5,
    info:'a', 
  },
  {
    id:5,
    info:'a', 
  },
]
const renderItem = ({item}) => {
  return(
      <View style={{
        borderWidth:2,
        width:80,
        height:80,
      }}>
          <Text>{item.info}</Text>
      </View> 
  )
}
function MemberInfoScreen() {

  return (
    <View></View>
  //   <FlatList
  //     data={data}
  //     renderItem={renderItem}
  //     keyExtractor={item => `${item.id}`}
  //     ListHeaderComponent={() =>(
        
  //       <View style={{
  //         borderWidth:2,
  //         width:60,
  //         height:60,
  //         backgroundColor:'grey'
  //       }}>
  //         <Text>HELLO WORLD</Text>
  //       </View>
  // )}

  //   />

  );
}

const styles = StyleSheet.create({
});

export default MemberInfoScreen;