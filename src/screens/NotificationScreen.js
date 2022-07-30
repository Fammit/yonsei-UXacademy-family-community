import { transform } from '@babel/core';
import React, {useState} from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Animated, {interpolate, Extrapolate, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.5;
const SPACING = SRC_WIDTH * 0.08;
console.log('스페이싱',SPACING)
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;
const ITEM_GAP = (SRC_WIDTH - CARD_LENGTH ) /2;

const DATA = [
    {
        id:1,
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        id:2,  
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        id:3,
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        id:4,
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        id:5,
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];


function Card({item, index, scrollX}) {
    const size = useSharedValue(0.58);
    const inputRange = [
        (index - 1) * CARD_LENGTH,
        index * CARD_LENGTH,
        (index + 1) * CARD_LENGTH
    ]
    size.value = interpolate(
        scrollX,
        inputRange,
        [0.58, 1, 0.58],
        Extrapolate.CLAMP
    )
    const cardStyle = useAnimatedStyle(() => {
        return{
            transform: [{scaleY: size.value}]
        }
    })
    return(
        <Animated.View style={[styles.card, cardStyle, {
            marginLeft: index == 0 ? SIDECARD_LENGTH :  15.91428571428572,
            marginRight: index == 2 ? 15.91428571428572 : SPACING,
        },]}>
            <Image
                source={{uri:item.illustration}}
                style={{width:'100%', height:'100%'}}
            />
        </Animated.View>
    )
}

function NotificationScreen() {
    const [scrollX, setScrollX] = useState(0)
    return (
            <Animated.FlatList
                decelerationRate={0.8}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_LENGTH}
                scrollEventThrottle={16}
                contentContainerStyle={{paddingTop:150, paddingHorizontal:23}}

                disableIntervalMomentum={true}
                disableScrollViewPanResponder={true}
                horizontal
                onScroll={(event) => {
                    setScrollX(event.nativeEvent.contentOffset.x);
                }}
                data={DATA}
                keyExtractor={(item) => item.title}
                renderItem={({item, index}) => {
                    return(
                        <Card item={item} index={index} scrollX={scrollX}/>
                    )
                }}
            />
    )
}

const styles = StyleSheet.create({
    card:{
        width:CARD_LENGTH,
        height:250,
        borderRadius:20,
        borderWidth:2,
        overflow:'hidden'

    }
})

export default NotificationScreen;
