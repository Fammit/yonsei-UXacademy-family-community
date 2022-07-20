import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function UploadQuestionButton({onQuestionSubmit}) {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={onQuestionSubmit}>
                <Icon name="checkcircleo" size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        position:'absolute',
        marginTop:3,
        right:30
    }
})

export default UploadQuestionButton;