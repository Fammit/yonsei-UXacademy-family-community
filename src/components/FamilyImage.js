import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import AlarmButton from './AlarmButton';
import UploadButton from './UploadButton';
import SettingButton from './SettingButton';

function FamilyImage() {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formatted = `${year}년 ${month}월 ${day}일`
    
    return (
        <View>
            <View>
                <Text style={styles.titleText}>Text Area</Text>
                <Text style={styles.dateText}>{formatted}</Text>
            </View>
            <View>
                <SettingButton/>
                <AlarmButton/>
            </View>
            <UploadButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold'
    },
    dateText:{
        fontSize:16,
        fontWeight:'bold'
    }
});

export default FamilyImage;