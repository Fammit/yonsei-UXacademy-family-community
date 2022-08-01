import React, {useEffect, useState} from 'react';
import { FlatList, Animated, StyleSheet, Image, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {signOut} from '../lib/auth';
import {useUserContext} from '../contexts/UserContext';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
// const ITEM_SIZE = width * 0.596;
// const ITEM_GAP = (width - ITEM_SIZE) /2;
// const ITEM = 10;

// console.log('WIDTH:', width)
// console.log('HEIGHT:', height)
// console.log('ITEM_SIZE:', ITEM_SIZE)
// console.log('ITEM_GAAP:', ITEM_GAP)

// const ENTRIES = [
//     {
//       id:1,
//       title: 'Beautiful and dramatic Antelope Canyon',
//       subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//       illustration: 'https://i.imgur.com/UYiroysl.jpg',
//     },
//     {
//         id:2,  
//       title: 'Earlier this morning, NYC',
//       subtitle: 'Lorem ipsum dolor sit amet',
//       illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
//     },
//     {
//         id:3,
//       title: 'White Pocket Sunset',
//       subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//       illustration: 'https://i.imgur.com/MABUbpDl.jpg',
//     },
//     {
//         id:4,
//       title: 'Acrocorinth, Greece',
//       subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//       illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
//     },
//     {
//         id:5,
//       title: 'The lone tree, majestic landscape of New Zealand',
//       subtitle: 'Lorem ipsum dolor sit amet',
//       illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
//     },
//   ];
function MyProfileScreen() {
    const {setUser} = useUserContext();
    //const scrollX = React.useRef(new Animated.Value(0)).current;
    
    //로그아웃 실행
    const onLogout = async () => {
        await signOut();
        setUser(null);
    }

    return (
        <View style={styles.wrapper}>
            <View style={{alignItems:'center', marginBottom:40}}>
                <TouchableOpacity style={styles.button} onPress={onLogout}>
                    <Text style={styles.text}>로그아웃</Text>
                </TouchableOpacity>
            </View>
            {/* <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingTop:230, paddingHorizontal:ITEM_GAP}}
                decelerationRate={0}
                snapToInterval={ITEM_SIZE}
                scrollEventThrottle={ITEM_SIZE}
                data={ENTRIES}
                keyExtractor={(item) => item.title}
                renderItem={({item, index}) => {
                    const inputRange = [
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE,
                        (index + 1) * ITEM_SIZE,
                    ]
                    //보간값 : inputrange --> outrange - return
                    //interpolate : View에 사용
                    const outputRange = [-50, -120, -50];
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange,
                    })
                    return(
                        <View style={{width: ITEM_SIZE, backgroundColor:'pink' }}>
                            <Animated.View
                                style={{
                                    marginHorizontal:ITEM,
                                    padding:ITEM,
                                    borderRadius:34,
                                    alignItems:'center',
                                    transform:[{translateY}]
                                }}    
                            >
                                <Image style={styles.posterImage} source={{uri:item.illustration}}/>
                            </Animated.View>
                        </View>
                    )
                }}
            /> */}
        </View>
    );   
};

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    submitBtn:{
        width:150,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'grey'
    },
    button:{
        width:250,
        borderRadius:20,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'grey'
    },
    text:{
        fontSize:30,
        textAlign:'center'
    },
    // posterImage:{
    //     width:'100%',
    //     height:ITEM_SIZE * 1.2,
    //     resizeMode:'cover',
    //     borderRadius:24,
    //     margin:0,
    //     marginBottom:10
    // }
});

export default MyProfileScreen;
