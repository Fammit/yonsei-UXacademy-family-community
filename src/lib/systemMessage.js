import firestore from '@react-native-firebase/firestore';

export const systemMsgCollection = firestore().collection('systemMessage');

export async function getSystemMsg(){
    const result = await systemMsgCollection.doc('sample').get();
    return result.data();
    
    console.log('시스템 메시지=', result.data());
}