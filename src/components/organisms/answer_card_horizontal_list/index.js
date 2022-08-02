import React, {useState, useEffect, useRef} from 'react';
import { 
    StyleSheet,
    FlatList, 
    Text,
    ScrollView, 
    Animated,
    View,
    Dimensions, 
} from 'react-native';

import {getAnswer} from '../../../lib/answer';

import AnswerCard from '../../atoms/answer_card';

//ANIMATION
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ITEM_SIZE = width * 0.528;
const ITEM_GAP = (width - ITEM_SIZE) /2;
const ITEM = 10;
//

// const renderItem = ({item, index}) => {

//     return(
//         //애니메이션 view 전체 영역
//         <View>
//             <AnswerCard 
//                 photoURL={item.photoURL}
//                 answerId={item.answerId}
//                 info={item.info}
//                 answerPhotoURL={item.answerPhotoURL}
//                 translateY={translateY}
//             />
//         </View> 
//     )
// }

function AnswerCardHorizontalList() {
    const [answer, setAnswer] = useState([]);

    //ANIMATION
    const scrollX = React.useRef(new Animated.Value(0)).current;
    //

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAnswer();
                setAnswer(res);
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    },[])
    //console.log('Frontend DEBGUG=', answer);

    return (
        <Animated.FlatList 
            //ANIMATION
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
            )}
            contentContainerStyle={{paddingTop:234, paddingHorizontal:ITEM_GAP}}
            snapToInterval={ITEM_SIZE}
            scrollEventThrottle={ITEM_SIZE}
            //
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            style={styles.wrapper}
            data={answer}
            keyExtractor={item => `${item.answerId}`}
            renderItem={({item, index}) => {
                const inputRange = [
                    (index - 1) * ITEM_SIZE,
                    index * ITEM_SIZE,
                    (index + 1) * ITEM_SIZE,
                ]
                //보간값 : inputrange --> outrange - return
                //interpolate : View에 사용
                const outputRange = [-70, -110, -70];
                const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange,
                })
                return(
                    //애니메이션 view 전체 영역
                    <View style={{width: ITEM_SIZE,}}>
                        <AnswerCard
                            photoURL={item.photoURL}
                            answerId={item.answerId}
                            info={item.info}
                            answerPhotoURL={item.answerPhotoURL}
                            translateY={translateY}
                            createdAt={item.createdAt}
                        />
                    </View> 
                )
            }}
        />   
    )
}

const styles = StyleSheet.create({
    wrapper:{
        
    }
});

export default AnswerCardHorizontalList;