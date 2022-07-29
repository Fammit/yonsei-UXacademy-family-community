import React from 'react';
import { 
    StyleSheet, 
    View, 
    useWindowDimensions, 
    Image 
} from 'react-native';
import {Text} from 'react-native-paper';

import { useRoute } from '@react-navigation/native';

import QuestionBox from '../components/atoms/question_box';

function UploadAnswerScreen() {
    const route = useRoute();
    const {res} = route.params || {};
    const {data} = route.params || {};
    const {width} = useWindowDimensions();

    return (
        <View style={styles.wrapper}>
            <QuestionBox data={data}/>
                <View style={{marginLeft:15}}>
                    <Text style={{fontFamily:"NotoSansKR-Bold", fontSize:16}}>선택한 사진 🖼️</Text>
                </View>
                <View style={styles.block}>
                    <Image
                        source={{uri:res.assets[0]?.uri}}
                        style={[styles.image, {height:width}]}
                        resizeMode="contain"
                    />
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'white'
    },
    block:{
        backgroundColor:'blue',
    },
    image:{width:'100%', marginBottom:0}
})

export default UploadAnswerScreen;